import { Router } from "express";
import { register, login } from '../controllers/authController.js';
import { register, login, verify } from '../controllers/authController.js'

const router = Router()
router.get('/verify/:token', verify)
router.post('/register', register)
router.post('/login', login)
export default router