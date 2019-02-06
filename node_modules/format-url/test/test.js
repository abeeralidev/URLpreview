var urlFormat = require('../index');
var test = require('tape');

test('Works without specifying protocol, port or path', function (t) {
  var url = urlFormat('127.0.0.0');
  t.equal(url, 'http://127.0.0.0');
  t.end();
});

test('Works with port but without protocol or path', function (t) {
  var url = urlFormat('127.0.0.0:8080');
  t.equal(url, 'http://127.0.0.0:8080');
  t.end();
});

test('Works with http protocol but without port and path', function (t) {
  var url = urlFormat('http://127.0.0.0');
  t.equal(url, 'http://127.0.0.0');
  t.end();
});

test('Works with https protocol but without port and path', function (t) {
  var url = urlFormat('https://127.0.0.0');
  t.equal(url, 'https://127.0.0.0');
  t.end();
});

test('Works with port and path but without protocol', function (t) {
  var url = urlFormat('127.0.0.0:8080/path/to/things');
  t.equal(url, 'http://127.0.0.0:8080/path/to/things');
  t.end();
});

test('Accept a query object', function(t){
  var url = urlFormat('foo', { bar: 1, biz: 2 });
  t.equal(url, 'http://foo?bar=1&biz=2');
  t.end();
});

test('Accept a query string', function(t){
  var url = urlFormat('foo', "one=1&two=2");
  t.equal(url, 'http://foo?one=1&two=2');
  t.end();
});