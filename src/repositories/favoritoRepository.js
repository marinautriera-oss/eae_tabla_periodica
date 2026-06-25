import { getDb } from '../config/db.js'

export const getFavoritosByUser = async (usuarioId) => {
    const db = await getDb()
    const [rows] = await db.execute(
        `SELECT F.ID AS FAVORITO_ID, E.*
         FROM FAVORITOS F
         JOIN ELEMENTS E ON E.ID = F.ELEMENTO_ID
         WHERE F.USUARIO_ID = ?
         ORDER BY F.CREATED_AT DESC`,
        [usuarioId]
    )
    return rows
}

export const findFavorito = async (usuarioId, elementoId) => {
    const db = await getDb()
    const [rows] = await db.execute(
        'SELECT * FROM FAVORITOS WHERE USUARIO_ID = ? AND ELEMENTO_ID = ?',
        [usuarioId, elementoId]
    )
    return rows[0]
}

export const addFavorito = async (usuarioId, elementoId) => {
    const db = await getDb()
    const [result] = await db.execute(
        'INSERT INTO FAVORITOS (USUARIO_ID, ELEMENTO_ID) VALUES (?, ?)',
        [usuarioId, elementoId]
    )
    return result.insertId
}

export const removeFavorito = async (usuarioId, elementoId) => {
    const db = await getDb()
    await db.execute(
        'DELETE FROM FAVORITOS WHERE USUARIO_ID = ? AND ELEMENTO_ID = ?',
        [usuarioId, elementoId]
    )
}