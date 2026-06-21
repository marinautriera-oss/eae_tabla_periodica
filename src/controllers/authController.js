import { registerUser, loginUser} from '../services/authService.js'

export const register = async (req, res) => {
    console.log('BODY RECIBIDO:', req.body)   // ← línea temporal de debug
    const { nombre, email, contraseña } = req.body
    
    try{ const{nombre, email, contraseña} = req.body
    const id = await registerUser(nombre, email, contraseña)
    res.status(201).json({message:'Usuario creado',id})

    } catch(error){ res.status(400).json({message:error.message})
}
}
export const login = async (req, res) => {
    try {
        const { email, contraseña } = req.body
        const token = await loginUser(email, contraseña)
        res.status(200).json({ token })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}   