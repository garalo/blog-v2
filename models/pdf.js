// models/pdf.js

const mongoose = require('../db')

const pdfSchema = new mongoose.Schema({
  name: String,
})

const Pdf = mongoose.model('Pdf', pdfSchema)

module.exports = Pdf