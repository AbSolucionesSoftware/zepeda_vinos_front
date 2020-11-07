import axios from 'axios'
import 'dotenv';

const clienteAxios = axios.create({
    baseURL : 'https://tiendaab.herokuapp.com/api'
})

export default clienteAxios