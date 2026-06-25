import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import elementsRoutes from './routes/elements.js'
import favoritosRoutes from './routes/favoritos.js'



const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/elements', elementsRoutes)
app.use('/favoritos', favoritosRoutes)
export default app