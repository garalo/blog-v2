
const Article = require('../models/article');

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.render('articles', { articles });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Yeni öğe ekleme
exports.createArticle = (req, res) => {
  const { name } = req.body;
  const article = new Article({ name });

  article.save()
    .then(() => {
      console.log("Article kaydedildi.");
    })
    .catch(err => {
      console.error(err);
    });
  res.redirect('articles');
};

