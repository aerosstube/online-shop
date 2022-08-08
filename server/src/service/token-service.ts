import Token from "../models/tokenModel";
import ApiError from "../exceptions/api-error";
const jwt = require('jsonwebtoken');


class TokenService {
    generateToken(payload: any){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '20m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
        return {
            accessToken,
            refreshToken
        }
    }

    async save(token: string, userId: number) {
        const tokenData = await Token.findOne({
            where: {
                userId
            }
        });

        if (tokenData) {
            tokenData.refresh_token = token;
            return tokenData.save()
        }

        return await Token.create({
            refresh_token: token,
            userId
        });
    }

    async removeToken(refreshToken: string) {
        return await Token.destroy({
            where: {
                refresh_token: refreshToken
            }
        });
    }

    validateAccessToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch (e) {
            throw ApiError.BadRequestError('Неверный токен');
        }
    }

    validateRefreshToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        } catch (e) {
            throw ApiError.BadRequestError('Неверный токен');
        }
    }

    async findToken(refreshToken: string) {
        return await Token.findOne({
            where: {
                refresh_token: refreshToken
            }
        });
    }

}

export default new TokenService();