const nodemailer = require('nodemailer');

class MailService {
    private transporter: any;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });
    }


    async sendActivationLink(email: string, link: string) {
        const mail = await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Активация аккаунта',
            html: `<h1>Пожалуйста, перейдите по ссылке для активации аккаунта: <br> <a href="${link}" style="font-size: 15px;">${link}</a> </h1>`
        });
    }
}

export default new MailService();