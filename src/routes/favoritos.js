import { Router } from 'express'
import { verifyToken } from '../middleware/auth.js'
import { getFavoritos, addFavorito, deleteFavorito } from '../controllers/favoritoController.js'

const router = Router()

router.get('/', verifyToken, getFavoritos)
router.post('/:elementoId', verifyToken, addFavorito)
router.delete('/:elementoId', verifyToken, deleteFavorito)

export default router