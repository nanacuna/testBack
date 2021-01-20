import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import Products from './models/Products.js'

dotenv.config()

const {
    DB_USER,
    DB_PASS,
    DB_HOST
} = process.env


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/test`, {
    logging: false,
    native: false
})

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(sequelize.import(path.join(__dirname, '/models', file)));
//   });

// console.log(path.join(__dirname, '/models', file))

Products(sequelize)

const { ProductsModel } = sequelize.models;

export { ProductsModel, sequelize as conn }    // para importart la conexión { conn } = require('./db.js');