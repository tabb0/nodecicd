var request = require('supertest');
var app = require('../index.js');
// Esta es una prueba de comentario
describe('GET /', function() {
    it('respond with hey world version 2', function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('hey world version 2', done);
    });
});