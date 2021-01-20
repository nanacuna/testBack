const express = require('express')
const server = express()
const { Products } = require('./db.js')

server.get('/', (req, res) => {
    Products.findAll()
    .then(resp => res.send(resp))
    .catch(err => console.log(err))
})

module.exports = server