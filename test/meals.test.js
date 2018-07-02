const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

describe("meals endpoints", function() {
    // Add Seed stuff

    describe("GET /api/v1/meals", () => {
          it('shows all meals', (done) => {
              chai.request(app)
              .get("/api/v1/meals")
              .end((err, res) => {
                     expect(res).to.have.status(200);
                     done();
                })
           })
      });


    describe("GET /api/v1/meals/1/foods", () => {
          it('returns foods associated to meal', (done) => {
              chai.request(app)
              .get("/api/v1/meals/1/foods")
              .end((err, res) => {
                     expect(res).to.have.status(200);
                     done();
                })
           })

          it('returns a 404 if meal does not exist', (done) => {
              chai.request(app)
              .get("/api/v1/meals/1/foods")
              .end((err, res) => {
                     expect(res).to.have.status(404);
                     done();
                })
           })
      });

    describe("GET /api/v1/meals/id/foods/id", () => {
          it('returns 404 if meal or food does not exist', (done) => {
              chai.request(app)
              .get("/api/v1/meals/1/foods/1")
              .end((err, res) => {
                     expect(res).to.have.status(200);
                     done();
                })
           })

          it('returns 404 if meal or food does not exist', (done) => {
              chai.request(app)
              .get("/api/v1/meals/0/foods/1")
              .end((err, res) => {
                     expect(res).to.have.status(404);
                     done();
                })
           })

          it('returns 404 if meal or food does not exist', (done) => {
              chai.request(app)
              .get("/api/v1/meals/1/foods/0")
              .end((err, res) => {
                     expect(res).to.have.status(404);
                     done();
                })
           })

      });

    describe("POST /api/v1/meals/1/foods", () => {
          it('adds a food to a meal', (done) => {
              chai.request(app)
              .post("/api/v1/meals/1/foods/1")
              .end((err, res) => {
                     expect(res).to.have.status(404);
                     done();
                })
           })

          it('returns a 404 if the meal does not exist', (done) => {
              chai.request(app)
              .post("/api/v1/meals/0/foods/1")
              .end((err, res) => {
                     expect(res).to.have.status(404);
                     done();
                })
           })

          it('returns a 404 if the food does not exist', (done) => {
              chai.request(app)
              .post("/api/v1/meals/1/foods/0")
              .end((err, res) => {
                     expect(res).to.have.status(404);
                     done();
                })
           })
      });

    describe("DELETE /api/v1/meals/1/foods", () => {
          it('removes a food from a meal', (done) => {
              chai.request(app)
              .delete("/api/v1/meals/1/foods/1")
              .end((err, res) => {
                     expect(res).to.have.status(200);
                     done();
                })
           })
      });
});
