var express = require("express");
var router = express.Router();
const Meal = require("../models/meal");

// GET meals
router.get("/", function(req, res, next) {
    Meal.all().then(meals => res.json(meals));
});

router.get("/:meal_id/foods", function(req, res, next) {
    var id = req.url.split("/")[1];
    Meal.find(id).then((meal) => {
        meal ? res.json(meal) : next();
    });
});

module.exports = router;
