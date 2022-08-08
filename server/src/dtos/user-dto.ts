import User from "../models/userModel";

module.exports = class UserDto {
    id!: number;
    email?: string;
    login!: string;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        this.login = user.login;
    }
}