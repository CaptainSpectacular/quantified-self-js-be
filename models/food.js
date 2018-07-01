const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration)

class Food {

    static all(){
        return database("foods").select("id", "name", "calories");
    };

    static find(id) {
        return database("foods").where("id", id);
    };

    static create(attrs) {
        return database("foods").insert(attrs)
                                .returning(["id", "name", "calories"]);
    };

    static delete(id) {
        return database("foods").where("id", id).del();
    };

};

module.exports = Food;
