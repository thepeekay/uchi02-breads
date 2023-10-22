const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) =>
{
    res.send(Bread)
});

//SHOW
//localhost/breads/0
breads.get('/:arrayIndex', (req, res) =>
{
    res.send(Bread[req.params.arrayIndex])
});
module.exports = breads