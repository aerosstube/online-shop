export default class ApiError extends Error {
    status : number;
    errors : any;

    constructor(status: number, message: string, errors: object[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован');
    }

    static BadRequestError(message: string, errors: object[] = []) {
        return new ApiError(400, message, errors);
    }
}