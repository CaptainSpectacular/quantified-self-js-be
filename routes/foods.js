var express = require("express");
var router = express.Router();
const foodsController = require("../controllers/foodsController");

router.get("/", foodsController.index);
router.get("/:id", foodsController.show); 
router.post("/", foodsController.create); 
router.put("/:id", foodsController.update); 
router.patch("/:id", foodsController.update); 
router.delete("/:id", foodsController.destroy) 

module.exports = router;
