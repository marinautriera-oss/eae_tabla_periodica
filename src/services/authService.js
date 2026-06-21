import bcrypt from 'bcrypt'
import { findByEmail, createUser } from '../repositories/userRepository.js'
import jwt from 'jsonwebtoken'

export const registerUser = async (nombre, email, contraseña) => { 
    const existing = await findByEmail(email)
if (existing) throw new Error('El email ya esta registrado')
    const hashed = await bcrypt.hash(contraseña, 10)
const rol = 'estudiante'
const estado = 'activo'
const id = await createUser(nombre, email, hashed, rol, estado)
return id
}
export const loginUser = async (email, contraseña) => {
    const usuario = await findByEmail(email)
    if (!usuario) throw new Error('Email o contraseña incorrectos')
   
        const match = await bcrypt.compare(contraseña, usuario.CONTRASEÑA)
    if (!match) throw new Error('Email o contraseña incorrectos')
    
        const token = jwt.sign({ id: usuario.ID, rol: usuario.ROL }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}