const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration)

class Meal{

    static all() {
        // select all meals, iterate over them to add the foods property
        // through a joins query.
        return database("meals").select("id", "name").map(this.foods);
    };

    static find(id) {
        return database("meals").select("id", "name")
                                .where("id", id)
                                .map(this.foods)
                                .then((food) => {
                                    return food[0];
                                })
                                .catch(() => {
                                    return 0;
                                });
    };

    static foods(meal) {
        // select all items from foods, join on food_meals
        // where the food_meals meal_id is equal to this
        // meal's id
        // set the meal's empty foods property equal to
        // the new array of foods
        return database("foods")
               .select("foods.id", "foods.name", "foods.calories")
               .join("food_meals", { "foods.id": "food_meals.food_id" })
               .where("food_meals.meal_id", meal.id)
               .then(foods => {
                    meal.foods = foods;
                    return meal;
               });
    };
};

module.exports = Meal;
