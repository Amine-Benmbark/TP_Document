import express from 'express';
import { addApiKey, authenticateApiKey } from '../controllers/apiKeyController.js';
import {verifyJwt} from '../middlewares/jwt.js';

const router = express.Router();

// Route pour ajouter une API Key
router.post('/add', verifyJwt, addApiKey);

// Route pour s'authentifier via une API Key et obtenir un JWT
router.post('/', authenticateApiKey);

export default router;
