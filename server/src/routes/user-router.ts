import { Router } from 'express';
import UserController  from '../controllers/user-controller';
const { body } = require('express-validator');

const router = Router();

router.post('/registration',
    body('email').isEmail(),
    body('login').isLength({ min: 3 }),
    body('password').isLength({ min: 6, max: 32}),
    UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

router.get('/activate/:link', UserController.activateAccount);
router.get('/refresh', UserController.refreshToken);

export default router;