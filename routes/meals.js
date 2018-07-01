var express = require("express");
var router = express.Router();
const Meal = require("../models/meal");
const Food = require("../models/food");

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

router.post("/:meal_id/foods/:food_id", function(req, res, next) {
    var meal_id = req.url.split("/")[1]
    var food_id = req.url.split("/")[3]

    Meal.add_food(meal_id, food_id).then((meal) => {
        // Figure out how to get the meal and food names
        var message = {"message": `Successfully added ${meal[1]._rejectionHandler0.name} to ${meal[0]._rejectionHandler0.name}`}
        meal ? res.json(message) : next();
    }).catch((error) => {
        next(); 
    });
});

module.exports = router;
