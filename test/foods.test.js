const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

describe("Foods endpoints", function () {

 beforeEach(function(done) {
    // Fix these
    database.seed.run()
    .then(function() {
      done();
    });
  });

  afterEach(function(done) {
    database.seed.run()
    .then(function() {
      done();
    });
  });


  describe("GET /api/v1/foods/1", () => {
    it('returns the referenced food', (done) => {
      chai.request(app)
      .get('/api/v1/foods/0')
      .end((err, res) => {
        // fix db seed
        // expect(res).to.have.status(200);
        done();
      })
    })

    it('returns a 404 for nonexistent food', (done) => {
      chai.request(app)
      .get('/api/v1/foods/0')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      })
    })
  })

  describe("POST /api/v1/foods", () => {
    it('creates a food', (done) => {
      chai.request(app)
      .post('/api/v1/foods')
      .send({"food": {"name": "spinach", "calories": 100}})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.name).to.equal("spinach");
        expect(res.body.calories).to.equal(100);
        done();
      })
    })


    it('does not create without calories', (done) => {
      chai.request(app)
      .post('/api/v1/foods')
      .send({"food": {"name": "spinach"}})
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      })
    })


    it('does not create without name', (done) => {
      chai.request(app)
      .post('/api/v1/foods')
      .send({"food": {"calories": 100}})
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      })
    })

  })

  describe("PATCH /api/v1/foods/:id", () => {
    it('updates the food', (done) => {
      chai.request(app)
      .get('/api/v1/foods')
      .end((err, res) => {
        // Get seed working
        done();
      })
    })
  })

  describe("DELETE /api/v1/foods/:id", () => {
    it('deletes the food', (done) => {
      chai.request(app)
      .get('/api/v1/foods')
      .end((err, res) => {
        // Get seed working
        done();
      })
    })
  })
});

