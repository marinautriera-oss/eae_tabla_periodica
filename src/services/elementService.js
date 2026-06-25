import { getAllElements, getElementById, createElement, updateElement, deleteElement } from "../repositories/elementRepository.js";

export const getAll = async() => {
    return await getAllElements();
};
export const getById = async (id) => {
    return await getElementById(id);
};

export const create = async (data) => {
    return await createElement(data.NOMBRE, data.SIMBOLO, data.NUMERO_ATOMICO, data.MASA_ATOMICA, data.GRUPO, data.PERIODO, data.CATEGORIA, data.FOTO_URL, data.DESCRIPCION);
};

export const update = async (id, data) => {
    return await updateElement(id, data.NOMBRE, data.SIMBOLO, data.NUMERO_ATOMICO, data.MASA_ATOMICA, data.GRUPO, data.PERIODO, data.CATEGORIA, data.FOTO_URL, data.DESCRIPCION);
};

export const remove = async (id) => {
    return await deleteElement(id);
};
