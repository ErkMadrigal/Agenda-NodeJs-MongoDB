const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataBase = new Schema({
  name: String,
  lastName: String,
  description: String,
  number: String,
  email: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Usrs', DataBase)
