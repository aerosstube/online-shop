import { Router } from 'express';
import brandController from "../controllers/brand-controller";

const router = Router();

router.post('/', brandController.create);
router.get('/', brandController.getAll);

export default router;