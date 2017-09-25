var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();

chai.use(chaiHttp);


describe('Feeds', function() {

  it('Post a new feed', function (done) {
     chai.request(server)
     .post('/api/feeds').send({
        name: 'cfr feed',
        title: 'CFR',
        description: 'This is cfr feed publication',
        feed_url: 'http://cfr.feed.com'
      })
      .end(function(err, res){
        res.should.have.status(200);
        done();
   });
 });
  it('should list ALL feeds on /api/feeds GET', function(done) {
  chai.request(server)
    .get('/api/feeds')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
