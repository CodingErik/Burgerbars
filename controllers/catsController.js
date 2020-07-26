var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
  // THIS IS WHERE we send back the data
    res.render("index", hbsObject);
  });
});

// this gets smacked by the form data 
router.post("/api/cats", function(req, res) {
  // we recieve the data in the req.body 
  // key values name && sleepy 
  // cat.create take a column , value , && callback  
  cat.create([ "name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
    // testing the the result 
    // console.log(result)
    // Send back the ID of the new quote
    // accessing the inserId property from the result object 
    // res.json({ id: result.insertId });f
    // sending 200 status okay 
    res.sendStatus(200); 
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
