var express = require("express");
var router = express.Router();
const Food = require("../models/food");

class foodsController {
    static index(req, res, next) {
        Food.all().then(foods => res.json(foods));
    };

    static show(req, res, next) {
         var id = req.url.split("/")[1];
         Food.find(id).then((food) => {
         food ? res.json(food) : next();
        });
    };

    static create(req, res, next) {
        Food.create(req.body.food).then((food) => {
        food ? res.json(food) : res.sendStatus(400);
        }); 
    };

    static update(req, res, next) {
        var id = req.url.split("/")[1];
        Food.update(id, req.body.food).then((food) => {
        food ? res.json(food) : res.sendStatus(400);
        }); 
    };

    static destroy(req, res, next) {
        var id = req.url.split("/")[1]; 
        Food.delete(id).then(res.sendStatus(204)); 
    };
};

module.exports = foodsController;
