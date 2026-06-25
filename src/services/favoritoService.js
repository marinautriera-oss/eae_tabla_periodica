import { getFavoritosByUser, findFavorito, addFavorito, removeFavorito } from '../repositories/favoritoRepository.js'

export const listFavoritos = async (usuarioId) => {
    return await getFavoritosByUser(usuarioId)
}

export const addToFavoritos = async (usuarioId, elementoId) => {
    const existing = await findFavorito(usuarioId, elementoId)
    if (existing) throw new Error('Ese elemento ya está en tus favoritos')
    return await addFavorito(usuarioId, elementoId)
}

export const removeFromFavoritos = async (usuarioId, elementoId) => {
    const existing = await findFavorito(usuarioId, elementoId)
    if (!existing) throw new Error('Ese elemento no está en tus favoritos')
    await removeFavorito(usuarioId, elementoId)
}