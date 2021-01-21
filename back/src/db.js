import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

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

const models = sequelize.models;

export { models, sequelize as conn }