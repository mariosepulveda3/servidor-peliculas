// Cargar paquetes y importarlos
const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

// Función que conecta nuestra base de datos

const connectDb = () => {

    mongoose.connect(DB_URL, {
        userNewUrlParser: true,
        useUnifiedTopology: true
    })
}
