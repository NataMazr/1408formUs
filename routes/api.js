var express = require("express");
var router = express.Router();
var path = require("path");

var fs = require("fs");
var obj;

/* GET home page. */
router.post("/", function(req, res, next) {
  console.log(req.body);

  /**
   *
   */
  // fs.readFile(path.join(__dirname, "..", "public/users.json"), "utf8", function(
  //   err,
  //   data
  // ) {
  //   if (err) console.log(err);
  //   obj = JSON.parse(data);

  //   res.send(obj);
  // });

  fs.appendFile(
    path.join(__dirname, "..", "public/users.json"),
    `{ ${req.body.name} }`,
    function(err) {
      if (err) throw err;
      res.send("Saved!");
    }
  );
});

module.exports = router;
