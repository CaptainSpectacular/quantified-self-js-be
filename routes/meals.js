var express = require("express");
var router = express.Router();
const Meal = require("../models/meal");

// GET meals
router.get("/", function(req, res, next) {
    Meal.all().then(meals => res.json(meals));
});

module.exports = router;
