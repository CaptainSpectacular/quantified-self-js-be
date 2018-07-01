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
    Food.update(id, req.body.food).then(food => res.json(food[0]));
});

// DELETE foods
router.delete("/:id", function(req, res, next) {
    var id = req.url.split("/")[1];
    Food.delete(id).then(res.sendStatus(204));
});

module.exports = router;
