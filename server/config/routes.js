var mongoose = require('mongoose');
var api = require('../controllers/apis.js');


module.exports = function(app) {
	app.get('/user', api.index);
  	app.post('/user/', api.create);
  	app.delete('/user/:id', api.delete);
  }
