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
        next();
    });
});

// GET food
router.get("/:id", function(req, res, next) {
    var id = req.url.split("/")[1];
    database.raw("SELECT * FROM foods WHERE id = ?", id).then((data) => {
        res.send(data.rows[0]);
    }).catch((error) => {
        next();
    });
});

//POST foods
router.post("/", function(req, res, next) {
    database.raw("INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING *", [req.body.name, req.body.calories]).then((data) => {
        res.send(data.rows[0]);
    }).catch((error) => {
        next();
    });
});

// DELETE foods
router.delete("/:id", function(req, res, next) {
    var id = req.url.split("/")[1];
    database.raw("DELETE FROM foods WHERE id = ?", id).then((data) => {
        res.send(data);
    }).catch((error) => {
        console.log(error);
        next();
    });
});

module.exports = router;
