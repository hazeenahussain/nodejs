const mongoose = require('mongoose');
  // Part #2 Point 6 
mongoose.connect('mongodb+srv://hazeena:hazeena@cluster0.qh9d1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordatas',AuthorSchema);

module.exports = authordata;