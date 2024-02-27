
import axios from 'axios'
import { BASE_URL } from '../../utils'


export const createUser = async (nombre, email, cellphone, location, address, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, {
            nombre,
            email,
            cellphone,
            location,
            address,
            password,
        }) /* el primer argumento del metodo post es la url base mas el path y el segundo es el body donde le paso un objeto con lo que me pide la documentacion */
        return data /* ejemplo con data desextruturada */
    } catch (error) {
        console.log({ createUserError: error })
        return alert(error.response.data.errors[0].msg) /* de esta forma muestro el primer mensaje de error que encuentro */
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
        return response.data /* ejemplo con data estructurada */
    } catch (error) {
        console.log({ loginUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}

export const verifyUser = async (code, email ) => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/verify`, {
            code,
            email
        })
        return response.data
    } catch (error) {
        console.log({ loginUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}
