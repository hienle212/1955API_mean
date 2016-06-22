// require mongoose
var mongoose = require('mongoose');
// create the schema
var APISchema = new mongoose.Schema({
  name: String,
});
// register the schema as a model
var  API = mongoose.model('API', APISchema);