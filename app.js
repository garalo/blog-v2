const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressLayouts = require("express-ejs-layouts")
const app = express()
const port = 3000
//For Users Controller Routing set
const userRoutes = require('./routes/user')
const articleRoutes = require('./routes/article')

// Mongoose ile MongoDB bağlantısı
require('./db');


// EJS şablon motorunu kullanacağımızı belirtin
app.set('view engine', 'ejs')
app.use(expressLayouts); // express-ejs-layouts'i kullanacağımızı belirtiyoruz
app.use(bodyParser.urlencoded({ extended: true }))
// Routes Users Controller
app.use('/', userRoutes)
app.use('/', articleRoutes)

// Public klasörünü statik dosya olarak kullan
app.use(express.static('public'))

// Ana sayfa rota
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Uygulama ${port} numaralı port üzerinden çalışıyor.`)
})
