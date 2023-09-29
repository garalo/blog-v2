// routes/pdf.js

const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');

console.log("getPdf router İçi.");

router.get('/pdf', pdfController.getPdf);
router.post('/upload', pdfController.createUpload);

module.exports = router;