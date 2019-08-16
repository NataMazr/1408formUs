var express = require("express");
var router = express.Router();
var path = require("path");

var fs = require("fs");
/* GET home page. */
router.post("/", function(req, res, next) {
    console.log(req.body);
    fs.appendFile(
        path.join(__dirname, "..", "public/users.txt"),
        `{ ${req.body.name}: ${req.body.age}}`,
        function(err) {
            if (err) throw err;
        }
    );
    let data = fs.readFileSync('public/users.txt', 'utf8');
    res.send(data);
});


module.exports = router;