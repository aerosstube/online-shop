import ApiError from "../exceptions/api-error";
import express from "express";

module.exports = (req: express.Request, res: express.Response, next: Function) => {
    try {

    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
}