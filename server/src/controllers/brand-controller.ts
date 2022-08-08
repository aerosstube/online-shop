import express from "express";

class BrandController {
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

export default new BrandController();