var mongoose = require('mongoose');
var API = mongoose.model('API');
module.exports = (function(){
    return {
      index: function(req,res){
     API.find({}, function(err, users) {
         res.json(users);
  })
   },
    create: function(req,res){
    var api = new API (req.body);
    api.save(function(err, data) {
      if(err)
          res.json(err)
        else  res.json(data);
          })
  },
  delete : function(req,res){
    API.remove({_id: req.params.id }, function(err, user){
      if(err)
        res.json(err)
        else res.json({'status' : true})
    });
  }
}
}) ();
