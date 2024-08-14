import { api } from "./requester.js";

const baseUrl = "http://localhost:3030/";
const endPoints = {
    singleTattoo: "data/tattoos",
    allTattoos: "data/tattoos?sortBy=_createdOn%20desc"
}

async function getAllTattoos() {
    return await api.get(baseUrl + endPoints.allTattoos);
}
async function getDetails(id) {
    return await api.get(baseUrl + endPoints.singleTattoo + `/${id}`)
}
async function addTattoo(data) {
    return await api.post(baseUrl + endPoints.singleTattoo, data)
}
async function editTattoo(id, data) {
    return await api.put(baseUrl + endPoints.singleTattoo + `/${id}`, data)
}
async function delTattoo(id) {
    return await api.del(baseUrl + endPoints.singleTattoo + `/${id}`)
}

export const dataService = {
    getAllTattoos,
    getDetails,
    addTattoo,
    editTattoo,
    delTattoo
}