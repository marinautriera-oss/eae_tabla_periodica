import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { findByEmail, createUser, findByVerificationToken, markAsVerified } from '../repositories/userRepository.js'
import { generateVerificationToken } from '../utils/token.js'
import { sendVerificationEmail } from '../utils/email.js'
import { registerUser, loginUser, verifyEmail } from '../services/authService.js'

export const registerUser = async (nombre, email, contraseña) => {
    const existing = await findByEmail(email)
    if (existing) throw new Error('El email ya está registrado')

    const hashed = await bcrypt.hash(contraseña, 10)
    const { token, expires } = generateVerificationToken()

    const id = await createUser(nombre, email, hashed, 'ESTUDIANTE', 'ACTIVO', token, expires)

    try {
        await sendVerificationEmail(email, nombre, token)
    } catch (err) {
        console.error('No se pudo enviar el email:', err.message)
    }

    return id
}

export const verifyEmail = async (token) => {
    const usuario = await findByVerificationToken(token)
    if (!usuario) throw new Error('Token inválido')

    if (new Date(usuario.VERIFICATION_EXPIRES) < new Date()) {
        throw new Error('El token expiró, registrate de nuevo')
    }

    await markAsVerified(usuario.ID)
}

export const loginUser = async (email, contraseña) => {
    const usuario = await findByEmail(email)
    if (!usuario) throw new Error('Email o contraseña incorrectos')

    const match = await bcrypt.compare(contraseña, usuario.CONTRASEÑA)
    if (!match) throw new Error('Email o contraseña incorrectos')

    if (!usuario.VERIFICADO) {
        throw new Error('Verificá tu email antes de iniciar sesión')
    }

    const token = jwt.sign(
        { id: usuario.ID, rol: usuario.ROL, nombre: usuario.NOMBRE },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    )
    return token
}