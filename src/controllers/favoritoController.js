import { listFavoritos, addToFavoritos, removeFromFavoritos } from '../services/favoritoService.js'

export const getFavoritos = async (req, res) => {
    try {
        const favoritos = await listFavoritos(req.user.id)
        res.status(200).json(favoritos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addFavorito = async (req, res) => {
    try {
        const id = await addToFavoritos(req.user.id, req.params.elementoId)
        res.status(201).json({ message: 'Agregado a favoritos', id })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteFavorito = async (req, res) => {
    try {
        await removeFromFavoritos(req.user.id, req.params.elementoId)
        res.status(200).json({ message: 'Eliminado de favoritos' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}