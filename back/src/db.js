import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import { capitalizeKeys } from './utils/utils.js'

dotenv.config()

const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/test`, {
    logging: false,
    native: false
})

const __dirname = dirname(fileURLToPath(import.meta.url)); // Current directory

const fileNames = fs.readdirSync(path.join(__dirname, 'models'))
                    .filter(fileName => fileName.slice(-3) === '.js');

for(const fileName of fileNames) {
    const { default: model } = await import(`./models/${fileName}`);
    
    model(sequelize);
}

sequelize.models = capitalizeKeys(sequelize.models);

const { Products, Categories } = sequelize.models;

// // Aca vendrian las relaciones
// Products.belongsToMany(Categories, { through: 'products_category', foreignKey: 'category_id' });
// Categories.belongsToMany(Products, { through: 'products_category', primaryKey: 'products_category_id', foreignKey: 'product_id' });

// Products.belongsToMany(Categories, { through: 'products_category', timestamps: true } );

const models = sequelize.models;

export { models, sequelize as conn }