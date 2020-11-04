var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  //handle root
});

router.get("/")

// var market = require("../models/model.js");

// Home page route.
// router.get('/', function (req, res) {
//   res.send('home page');
// });

// product list page route.
// router.get('/products', function (req, res) {
//   res.send('products');
// });

// var marketContent = require('/'); // Replace the path from '/'
// app.use('/', marketContent);

router.get("/", function(req, res) {
  // market.all(function(data) {
    // var hbsObject = {
    //   markets: data
    // };
    // console.log(hbsObject);
    res.render("index");
  // });
});


// router.post("/api/markets", function(req, res) {
//   market.create([
//     "product", "description"
//   ], [
//     req.body.product, req.body.description
//   ], function(result) {
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/markets/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   market.update({
//     product: req.body.product
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.put("/api/markets/:products", function(req, res) {
//   var condition = "products = " + req.params.id;

//   console.log("condition", condition);

//   products.update({
//     product: req.body.product
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/markets/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   market.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;