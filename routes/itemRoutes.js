import express from 'express';
import {createItem, getItemById, getItems, updateItem, deleteItem } from '../controllers/itemController.js';
import verifyJwt from '../middlewares/jwt.js';


const router = express.Router();

router.post('/', verifyJwt, createItem);
router.get('/', verifyJwt, getItems);
router.get('/:id', verifyJwt, getItemById);
router.put('/:id', verifyJwt, updateItem);
router.delete('/:id', verifyJwt, deleteItem);

export default router;
