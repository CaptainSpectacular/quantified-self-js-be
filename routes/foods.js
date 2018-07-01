var express = require("express");
var router = express.Router();
const Food = require("../models/food");

// GET foods
router.get("/", function(req, res, next) {
    Food.all().then(foods => res.json(foods));
});

// GET food
router.get("/:id", function(req, res, next) {
    var id = req.url.split("/")[1];
    Food.find(id).then(food => res.json(food[0]));
});

//POST foods
router.post("/", function(req, res, next) {
    Food.create(req.body.food).then(food => res.json(food[0]));
});

// PATCH foods
router.patch("/:id", function(req, res, next) {
    var id = req.url.split("/")[1];
    var name = req.body.name;
    var calories = req.body.calories;

    if (name && calories) {
        database.raw("UPDATE foods SET name = ?, calories = ? WHERE id = ?", [name, calories, id]).then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            next();
        });
    } else if (name) {
        database.raw("UPDATE foods SET name = ? WHERE id = ?", [name, id]).then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            next();
        });
    } else {
        database.raw("UPDATE foods SET calories = ? WHERE id = ?", [calories, id]).then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            next();
        });
    };
});

// DELETE foods
router.delete("/:id", function(req, res, next) {
    var id = req.url.split("/")[1];
    database.raw("DELETE FROM foods WHERE id = ?", id).then((data) => {
        res.send(data);
    }).catch((error) => {
        next();
    });
});

module.exports = router;
