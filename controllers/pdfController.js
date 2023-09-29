// controllers/pdfController.js

const Pdf = require('../models/pdf');

console.log("getPdf dışı.");

exports.getPdf = async (req, res) => {
  console.log("getPdf İçi.");
  //res.render('pdf.ejs')
  try {
    res.render('pdf');
  } catch (err) {
    console.log(" eror içi İçi.");
    res.status(500).json({ error: err.message });
  }
};

exports.createUpload = (req, res) => {};
