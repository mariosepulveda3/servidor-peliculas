const express = require('express');

require('dotenv').config();
require('./utils/db');

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const server = express();

server.listen(PORT, () => {
    console.log(`Server running in htpp://localhost:${PORT}`);
})