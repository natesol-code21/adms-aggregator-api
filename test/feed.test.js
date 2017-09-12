'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000/api');

describe('Feed', function() {
  it('should get all feeds', function(done) {
    api.get('/feeds')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var feeds = res.body;

        expect(feeds.length).to.be.above(0);
        done();
      });
  });

  // it('should get a single feeds', function(done) {
  //   api.get('/feeds/findOne')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end(function(err, res) {
  //       if (err) {
  //         return done(err);
  //       }
  //       var feeds = res.body;
  //
  //       expect(Array.isArray(feeds)).to.be.false;
  //       done();
  //     });
  // });
});
