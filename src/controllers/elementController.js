import { getAll, getById, create, update, remove } from "../services/elementService.js";

export const getElements = async (req, res) => {
    try {
        const elements = await getAll()
        res.status(200).json(elements)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
  }
    export const getElementById = async (req, res) => {
    try {
        const element = await getById(req.params.id)
       if (!element) return res.status(404).json({ message: 'Elemento no encontrado' })
        res.status(200).json(element)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
 export const createElement = async (req, res) => {
    try {
        const id = await create( req.body)
        res.status(201).json({ message:'Elemento creado', id })
    } catch (error) {
        console.error('Error al crear elemento:', error)
        res.status(500).json({ message: error.message })
    }
 }
 export const updateElement = async (req, res) => {
    try {
        await update( req.params.id, req.body)
        res.status(200).json({ message:'Elemento actualizado' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
 }

 export const deleteElement = async (req, res) => {
    try {
        await remove( req.params.id )
        res.status(200).json({ message:'Elemento eliminado' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
 }