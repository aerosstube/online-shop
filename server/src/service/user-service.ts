import User from "../models/userModel";
import { Op } from "sequelize";
import ApiError from "../exceptions/api-error";
import tokenService from "./token-service";
import mailService from "./mail-service";

const uuid = require('uuid');
const UserDto = require("../dtos/user-dto");
const bcrypt = require("bcryptjs");
const standardImgPath = '../img/standartUserImg.png';

class UserService {
    async registration(email: string, login: string, password: string) {
        const candidate = await User.findOne({
            where: {
                [Op.or]: [
                    {email},
                    {login}
                ]
            }
        });

        if (candidate) {
            throw ApiError.BadRequestError(`Пользователь с таким логином или почтой уже существует`);
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const activationLink = uuid.v4();

        const user = await User.create({
            email,
            login,
            password: hashedPassword,
            img: standardImgPath,
            activationLink
        });
        await mailService.sendActivationLink(user.email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user);

        const tokens = tokenService.generateToken({...userDto});
        await tokenService.save(tokens.refreshToken, user.id);

        return {
            ...tokens,
            user: userDto
        }

    }

    async activate(activationLink: string) {
        const candidate = await User.findOne({
            where: {
                activationLink
            }
        });

        if (!candidate) {
            throw ApiError.BadRequestError('Неверная ссылка активации');
        }

        candidate.isActive = true;
        await candidate.save();
    }

    async login(email: string, login: string, password: string) {
        const candidate = await User.findOne({
            where: {
                [Op.or]: [
                    {email},
                    {login}
                ]
            }
        });


        if (!candidate) {
            throw ApiError.BadRequestError(`Пользователь с таким логином или почтой не найден`);
        }

        const isPasswordValid = await bcrypt.compare(password, candidate.password);

        if (!isPasswordValid) {
            throw ApiError.BadRequestError(`Неверный пароль`);
        }


        const userDto = new UserDto(candidate);
        const tokens = tokenService.generateToken({...userDto});

        await tokenService.save(tokens.refreshToken, candidate.id);

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken: string){
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = tokenService.findToken(refreshToken);

        if (!userData && !tokenFromDB) {
            throw ApiError.UnauthorizedError();
        }

        const user = await User.findOne({
            where: {
                id: userData.id
            }
        });

        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});

        await tokenService.save(tokens.refreshToken, userDto.id);

        return {
            ...tokens,
            user: userDto
        }
    }
}

export default new UserService();