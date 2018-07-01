const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration)

class Food {

    static all(){
        return database("foods").select("id", "name", "calories");
    };

    static find(id) {
        return database("foods").where("id", id).then(food => food[0]);
    };

    static create(attrs) {
        return database("foods").insert(attrs)
                                .returning(["id", "name", "calories"])
                                .then(food => food[0]).catch(() => 0);
    };

    static update(id, attrs) {
        return database("foods").where("id", id).update(attrs)
                                .returning(["id", "name", "calories"])
    };

    static delete(id) {
        return database("foods").where("id", id).del();
    };

};

module.exports = Food;
