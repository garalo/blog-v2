// models/user.js

const mongoose = require('../db')

const userSchema = new mongoose.Schema({
  name: String,
})

const User = mongoose.model('User', userSchema)

module.exports = User
