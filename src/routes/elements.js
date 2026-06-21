import { Router } from 'express';
import { verifyToken } from '../middleware/auth.js';
import { getElements, getElementById, createElement, updateElement, deleteElement } from '../controllers/elementController.js';

const router = Router()
router.get('/', getElements)
router.get('/:id', getElementById)
router.post('/', verifyToken, createElement)
router.put('/:id', verifyToken, updateElement)
router.delete('/:id', verifyToken, deleteElement)

export default router;