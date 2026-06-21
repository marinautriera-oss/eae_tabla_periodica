import { getDb } from '../config/db.js'

export const getAllElements = async () => {
    const db = await getDb()
    const [rows] = await db.execute('SELECT * FROM ELEMENTS')
    return rows
}   
export const getElementById = async (id) => {
    const db = await getDb()
    const [rows] = await db.execute('SELECT * FROM ELEMENTS WHERE id = ?', [id])
    return rows[0]
}
export const createElement = async (nombre, simbolo, numero_atomico, masa_atomica, grupo, periodo, categoria) => {
    const db = await getDb()
    const [result] = await db.execute('INSERT INTO ELEMENTS (nombre, simbolo, numero_atomico, masa_atomica, grupo, periodo, categoria) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre, simbolo, numero_atomico, masa_atomica, grupo, periodo, categoria])
    return result.insertId
}
export const updateElement = async (id, nombre, simbolo, numero_atomico, masa_atomica, grupo, periodo, categoria) => {
    const db = await getDb()
    await db.execute('UPDATE ELEMENTS SET nombre = ?, simbolo = ?, numero_atomico = ?, masa_atomica = ?, grupo = ?, periodo = ?, categoria = ? WHERE id = ?', [nombre, simbolo, numero_atomico, masa_atomica, grupo, periodo, categoria, id])
}
export const deleteElement = async (id) => {
    const db = await getDb()
    await db.execute('DELETE FROM ELEMENTS WHERE id = ?', [id])
}