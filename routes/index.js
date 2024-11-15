import express from 'express';
import apiKeyRoutes from './apiKeyRoutes.js';
import itemRoutes from './itemRoutes.js'

const router = express.Router();

router.use('/autenticate', apiKeyRoutes);
router.use('/items', itemRoutes);

export default router;
