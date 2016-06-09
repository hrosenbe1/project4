'use strict';

var app = require('../..');
import request from 'supertest';

var newFine;

describe('Fine API:', function() {

  describe('GET /api/fines', function() {
    var fines;

    beforeEach(function(done) {
      request(app)
        .get('/api/fines')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          fines = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(fines).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/fines', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/fines')
        .send({
          name: 'New Fine',
          info: 'This is the brand new fine!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newFine = res.body;
          done();
        });
    });

    it('should respond with the newly created fine', function() {
      expect(newFine.name).to.equal('New Fine');
      expect(newFine.info).to.equal('This is the brand new fine!!!');
    });

  });

  describe('GET /api/fines/:id', function() {
    var fine;

    beforeEach(function(done) {
      request(app)
        .get('/api/fines/' + newFine._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          fine = res.body;
          done();
        });
    });

    afterEach(function() {
      fine = {};
    });

    it('should respond with the requested fine', function() {
      expect(fine.name).to.equal('New Fine');
      expect(fine.info).to.equal('This is the brand new fine!!!');
    });

  });

  describe('PUT /api/fines/:id', function() {
    var updatedFine;

    beforeEach(function(done) {
      request(app)
        .put('/api/fines/' + newFine._id)
        .send({
          name: 'Updated Fine',
          info: 'This is the updated fine!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedFine = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFine = {};
    });

    it('should respond with the updated fine', function() {
      expect(updatedFine.name).to.equal('Updated Fine');
      expect(updatedFine.info).to.equal('This is the updated fine!!!');
    });

  });

  describe('DELETE /api/fines/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/fines/' + newFine._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when fine does not exist', function(done) {
      request(app)
        .delete('/api/fines/' + newFine._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
