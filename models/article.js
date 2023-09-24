const mongoose = require("../db");

// Veritabanı şeması ve modeli
const articleSchema = new mongoose.Schema({
  name: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
