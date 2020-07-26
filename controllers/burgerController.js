const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      cats: data
    };
    console.log(hbsObject);
  // THIS IS WHERE we send back the data
    res.render("index", hbsObject);
  });
});

// this gets smacked by the form data 
router.post("/api/burger", function(req, res) {
  // we recieve the data in the req.body 
  // key values name && sleepy 
  // cat.create take a column , value , && callback  
  burger.create([ "name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {


    res.sendStatus(200); 
  });
});

router.put("/api/burger/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
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


// delete router DONE! 
router.delete("/api/burger/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
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
