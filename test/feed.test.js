var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();

chai.use(chaiHttp);


describe('Feeds', function() {
  it('should list ALL feeds on /api/feeds GET', function(done) {
  chai.request(server)
    .get('/api/feeds')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});
});
