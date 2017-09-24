'use strict';
var server = require('../server/server');
var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('https://0.0.0.0:3000/api');

var Feed

before(function() {
    Feed = server.models.feed
})

beforeEach(function(){
    console.log('beforeEach', this.currentTest.title);
});
afterEach(function(){
    console.log('afterEach', this.currentTest.title, this.currentTest.state);
});


it('Post a new feed', function (done) {
    api.post('/feeds').send({
      name: 'cfr feed',
      title: 'CFR',
      description: 'This is cfr feed publication',
      feed_url: 'http://cfr.feed.com'
    }).expect(200, done)
 })

describe('Feed', function() {

  it('Post a new feed', function (done) {
      api.post('/feeds').send({name: 'test feed'}).expect(200, done)
   })

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

  it('should get a single feeds', function(done) {
    api.get('/feeds/findOne')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var feeds = res.body;
        expect(Array.isArray(feeds)).to.be.false;
        done();
      });
  });


    it('should get total number of feeds', function(done) {
      api.get('/feeds/count')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          var feeds = res.body;
          expect(Array.isArray(feeds)).to.be.false;
          done();
        });
    });

});
