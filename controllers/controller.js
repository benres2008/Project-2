var express = require("express");

var router = express.Router();

var db = require("../models/");

router.get('/', function (req, res) {
  db.Product.findAll({}).then(function(data){
    var hbsObject={
      markets: data
    };
    res.render("index",hbsObject)
  })
});

router.get("/api/product/:id", function(req, res) {
  db.Product.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(data){
    res.json(data)
  })
});

router.get("/login", function(req,res){
  res.render("login")
});


router.get("/api/inventory",(req,res)=>{
  

})

module.exports = router;
