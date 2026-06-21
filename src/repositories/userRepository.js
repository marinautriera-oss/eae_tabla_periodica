import { getDb } from '../config/db.js'

export const findByEmail = async (email) => {
    const db = await getDb()
    const [rows] = await db.execute('SELECT * FROM USERS WHERE email = ?', [email])
    return rows[0]
}

export const createUser = async (nombre, email, contraseña,rol,estado) => { 
    const db = await getDb()
    const [result] = await db.execute('INSERT INTO USERS (nombre, email, contraseña, rol, estado) VALUES (?, ?, ?, ?, ?)', [nombre, email, contraseña, rol, estado])
    return result.insertId
}
