import { getDb } from '../config/db.js'

export const findByEmail = async (email) => {
    const db = await getDb()
    const [rows] = await db.execute('SELECT * FROM USERS WHERE email = ?', [email])
    return rows[0]
}

export const createUser = async (nombre, email, contraseña, rol, estado, verificationToken, verificationExpires) => {
    const db = await getDb()
    const [result] = await db.execute(
        'INSERT INTO USERS (NOMBRE, EMAIL, CONTRASEÑA, ROL, ESTADO, VERIFICATION_TOKEN, VERIFICATION_EXPIRES) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nombre, email, contraseña, rol, estado, verificationToken, verificationExpires]
    )
    return result.insertId
}

export const findByVerificationToken = async (token) => {
    const db = await getDb()
    const [rows] = await db.execute(
        'SELECT * FROM USERS WHERE VERIFICATION_TOKEN = ?',
        [token]
    )
    return rows[0]
}

export const markAsVerified = async (id) => {
    const db = await getDb()
    await db.execute(
        'UPDATE USERS SET VERIFICADO = true, VERIFICATION_TOKEN = NULL, VERIFICATION_EXPIRES = NULL WHERE ID = ?',
        [id]
    )
}