import { getAllElements, getElementById, createElement, updateElement, deleteElement } from "../repositories/elementRepository.js";

export const getAll = async() => {
    return await getAllElements();
};
export const getById = async (id) => {
    return await getElementById(id);
};

export const create = async (data) => {
    return await createElement(data.nombre, data.simbolo, data.numero_atomico, data.masa_atomica, data.grupo, data.periodo, data.categoria);
};

export const update = async (id, data) => {
    return await updateElement(id, data.nombre, data.simbolo, data.numero_atomico, data.masa_atomica, data.grupo, data.periodo, data.categoria);
};

export const remove = async (id) => {
    return await deleteElement(id);
};
