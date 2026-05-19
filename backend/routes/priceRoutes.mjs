import express from 'express';
import { comparePrices } from '../controllers/price_controllers.mjs';

const router = express.Router();

router.get('/compare/:name', comparePrices);

export default router;
