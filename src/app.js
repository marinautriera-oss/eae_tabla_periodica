import express from 'express'
import authRoutes from './routes/auth.js'
import elementsRoutes from './routes/elements.js'

const app = express()
app.use(express.json())
app.use('/auth', authRoutes)
app.use('/elements', elementsRoutes)

export default app