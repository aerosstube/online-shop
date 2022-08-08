import express from 'express';
import userService from "../service/user-service";
import ApiError from "../exceptions/api-error";
const { validationResult } = require('express-validator');

class UserController {
    async registration(req: express.Request, res: express.Response, next: Function) {
        try {
            const errors = await validationResult(req);
            console.log(errors.array() + "  ====== fddasfasdf asdjfhasdjkf")
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Ошибка валидации', errors.array()));
            }

            const {email, login, password} = req.body;
            const userData = await userService.registration(email, login, password);

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req: express.Request, res: express.Response, next: Function) {
        try {
            const {email, login, password} = req.body;

            const userData = await userService.login(email, login, password);

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req: express.Request, res: express.Response, next: Function) {
        try {
            const token = await userService.logout(req.cookies.refreshToken);
            res.clearCookie('refreshToken');

            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activateAccount(req: express.Request, res: express.Response, next: Function) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);

            return res.redirect(process.env.CLIENT_URL!);
        } catch (e) {
            next(e);
        }
    }

    async refreshToken(req: express.Request, res: express.Response, next: Function) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        } catch (e) {
            next(e);
        }
    }
}

export default new UserController();