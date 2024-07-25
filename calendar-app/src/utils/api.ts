import axios from "axios";

const api = axios.create({
    baseURL:'https://my-json-server.typicode.com/juanpernu/bilog-fe-challenge'
})

export const getSchedule = async () => {
    const response = await api.get('/schedule')
    return response.data
} 