var express = require("express");
var router = express.Router();
const mealsController = require("../controllers/mealsController");

router.get("/", mealsController.index);
router.get("/:meal_id/foods", mealsController.show); 
router.post("/:meal_id/foods/:food_id", mealsController.create); 
router.delete("/:meal_id/foods/:food_id", mealsController.destroy);

module.exports = router;
