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

 it('should add a SINGLE feed on /api/feeds POST', function(done) {
   chai.request(server)
     .post('/api/feeds')
     .send({'name': 'USEIA Feed', 'title': 'USEIA Feed Publication', 'description':'This is USEIA Feed publication','feed_url':'http://useia.com'})
     .end(function(err, res){
       console.log(res.body);
       res.should.have.status(200);
       res.should.be.json;
       res.body.should.be.a('object');
       res.body.should.have.property('name');
       res.body.should.have.property('title');
       res.body.should.have.property('description');
       res.body.should.have.property('feed_url');
       res.body.name.should.equal('USEIA Feed');
       res.body.title.should.equal('USEIA Feed Publication');
       res.body.description.should.equal('This is USEIA Feed publication');
       res.body.feed_url.should.equal('http://useia.com');
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
