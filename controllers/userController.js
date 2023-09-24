// controllers/userController.js

const User = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.render('users', { users });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.createUser = (req, res) => {
  const { name } = req.body;
  const user = new User({ name });

  user.save()
  .then(() => {
    console.log("Kullanıcı kaydedildi.");
  })
  .catch(err => {
    console.error(err);
  });
  res.redirect('/users');
};
