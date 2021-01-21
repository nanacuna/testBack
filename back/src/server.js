import express from 'express'
const server = express()
import { models } from './db.js'

const { Products } = models;

console.log(models)

server.get('/', (req, res) => {
    Products.findAll()
    .then(resp => res.send(resp))
    .catch(err => console.log(err))
})

export default server