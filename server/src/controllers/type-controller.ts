import express from "express";

class TypeController {
    async create(req: express.Request, res: express.Response, next: Function) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async getAll(req: express.Request, res: express.Response, next: Function) {
        try {

        } catch (e) {
            next(e);
        }
    }
}

export default new TypeController();