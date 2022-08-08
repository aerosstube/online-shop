import ApiError from "../exceptions/api-error";
import express from 'express';

module.exports = function (err: Error, req: express.Request, res: express.Response, next: Function) {
    console.log(err);

    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors});
    }
    return res.status(500).json({message: 'Неизвестная ошибка'});
}

