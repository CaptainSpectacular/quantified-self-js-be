const Meal = require("../models/meal");
const Food = require("../models/food");

class mealsController{
    static index(req, res, next) {
        Meal.all().then(meals => res.json(meals));
    };

    static show(req, res, next) {
        var id = req.url.split("/")[1];
        Meal.find(id).then((meal) => {
            meal ? res.json(meal) : next();
        });
    };

    static create(req, res, next) {
        var meal_id = req.url.split("/")[1]
        var food_id = req.url.split("/")[3]

        Meal.add_food(meal_id, food_id).then((meal) => {
        // Figure out how to get the meal and food names
            var message = {"message": `Successfully added ${meal[1]._rejectionHandler0.name    } to ${meal[0]._rejectionHandler0.name}`}
            meal ? res.json(message) : next();
            }).catch((error) => {
                next(); 
        });
    };

    static destroy(req, res, next) {
        var meal_id = req.url.split("/")[1]
        var food_id = req.url.split("/")[3]

        Meal.remove_food(meal_id, food_id).then((meal) => {
            console.log(meal);

            // This needs to change. It's way too unreliable.
            var message = {"message": `Successfully removed ${meal[1]._rejectionHandler0.name} from ${meal[0]._rejectionHandler0.name}`}
            }).catch((error) => {
                next();
            });
    };
};

module.exports = mealsController;
