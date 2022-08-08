import { Router } from 'express';
import userRouter from './user-router';
import deviceRouter from './device-router';
import brandRouter from './brand-router';
import typeRouter from './type-router';

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/device', deviceRouter);
router.use('/brand', brandRouter);

module.exports = router;