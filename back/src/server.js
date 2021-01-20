import express from 'express'
const server = express()
import { ProductsModel } from './db.js'

server.get('/', (req, res) => {
    ProductsModel.findAll()
    .then(resp => res.send(resp))
    .catch(err => console.log(err))
})

export default server