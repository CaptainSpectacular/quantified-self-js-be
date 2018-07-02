const Meal = require("../models/meal");
const Food = require("../models/food");

class mealsController{
    static index(req, res, next) {
        Meal.all().then(meals => res.json(meals));
    };

    static show(req, res, next) {
        Meal.find(req.params.meal_id).then((meal) => {
            meal ? res.json(meal) : next();
        });
    };

    static async create(req, res, next) {
        var food = await Food.find(req.params.food_id);
        var meal = await Meal.find(req.params.meal_id);

        Meal.add_food(meal.id, food.id).then((data) => {
            var message = {"message": `Successfully added ${food.name} to ${meal.name}`}
            meal ? res.json(message) : next();
            }).catch((error) => {
                next(); 
        });
    };

    static async destroy(req, res, next) {
        var food = await Food.find(req.params.food_id);
        var meal = await Meal.find(req.params.meal_id);

        Meal.remove_food(meal.id, food.id).then((data) => {
                console.log("sup");
            res.json({"message": `Successfully removed ${food.name} from ${meal.name}`});
            }).catch((error) => {
                next();
            });
    };
};

module.exports = mealsController;
