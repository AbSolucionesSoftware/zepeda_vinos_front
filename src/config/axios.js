import axios from 'axios'
import 'dotenv';

const clienteAxios = axios.create({
    baseURL : 'https://tienda-vinos-zepeda.herokuapp.com/api'
})

export default clienteAxios