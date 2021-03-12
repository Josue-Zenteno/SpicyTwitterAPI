var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PostSchema = new Schema({
  user: String,
  email: String,
  image: String,
  message: String,
  publicationdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
//esto va a la colección "posts" en la base de datos porque hemos
//definido que Post es el esquema y mongo va a buscare/crear una colección
//con ese nombre en minusculas y en plural