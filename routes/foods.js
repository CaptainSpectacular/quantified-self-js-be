const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration)
var express = require("express");
var router = express.Router();

// GET foods
router.get("/", function(req, res, next) {
    database.raw("SELECT * FROM foods").then((data) => {
        res.send(data.rows); 
    }).catch((error) => {
        throw(error);
    });
});

//POST foods
router.post("/", function(req, res, next) {
    database.raw("INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING *", [req.body.name, req.body.calories]).then((data) => {
        res.send(data.rows[0]);
    }).catch((error) => {
        throw(error);
    });
});

module.exports = router;
