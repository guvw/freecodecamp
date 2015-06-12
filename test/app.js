var request = require('supertest');
var app = require('../server/server.js');

describe('#ROUTES', function() {

  describe('GET /', function () {
    it('should return 200 OK', function (done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });

  describe('GET /signin', function () {
    it('should return 200 OK', function (done) {
      request(app)
        .get('/signin')
        .expect(200, done);
    });
  });

  describe('GET /email-signup', function () {
    it('should return 200 OK', function (done) {
      request(app)
        .get('/email-signup')
        .expect(200, done);
    });
  });

  describe('GET /random-url', function () {
    it('should return 302', function (done) {
      request(app)
        .get('/reset')
        .expect(302, done);
    });
  });

  describe('Get /camperName', function () {
    it('should return 200', function (done) {
      request(app)
        .get('/terakilobyte')
        .expect(200, done);
    });
  });
});
