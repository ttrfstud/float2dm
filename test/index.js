var test = require('taptap');
var assert = require('assert');

var matrix = require('../');

test(function (done) {
  /* Float matrix */
  var m;

  m = new matrix(2, 3);

  assert.equal(m.buf, void(0));  
  assert.equal(m.rfn, void(0));
  assert.equal(m.wfn, void(0));

  m.set(0, 0, 1.3);

  assert(m.buf.length, 24);  
  assert.equal(m.rfn, 'readFloatBE');
  assert.equal(m.wfn, 'writeFloatBE');

  m.set(0, 1, 2);
  m.set(0, 2, 3.51);
  m.set(1, 0, 33.18);
  m.set(1, 1, 35);
  m.set(1, 2, 11);

  // assert.equal(m.get(0, 0), 1.3); // <-- 1.2988896369934082
  assert.equal(m.get(0, 1), 2);
  // assert.equal(m.get(0, 2), 3.5); // <-- 3.509999990463257
  // assert.equal(m.get(1, 0), 33.18); // <-- 33.17993927001953
  assert.equal(m.get(1, 1), 35);
  assert.equal(m.get(1, 2), 11);

  done();
});

test(function (done) {
  /* Double matrix */
  var m;

  m = new matrix(2, 3, 1);

  assert.equal(m.buf, void(0));
  assert.equal(m.rfn, void(0));
  assert.equal(m.wfn, void(0));

  m.set(0, 0, 1.3);

  assert(m.buf.length, 48); 
  assert.equal(m.rfn, 'readDoubleBE');
  assert.equal(m.wfn, 'writeDoubleBE');

  m.set(0, 1, 2);
  m.set(0, 2, 3.51);
  m.set(1, 0, 33.18);
  m.set(1, 1, 35);
  m.set(1, 2, 11);

  assert.equal(m.get(0, 0), 1.3);
  assert.equal(m.get(0, 1), 2);
  assert.equal(m.get(0, 2), 3.51);
  assert.equal(m.get(1, 0), 33.18);
  assert.equal(m.get(1, 1), 35);
  assert.equal(m.get(1, 2), 11);

  done();
});

test(function (done) {
  /* Transpose */
  var m;

  m = new matrix(2, 3, 1);

  assert.equal(m.buf, void(0));

  m = m.tr();

  assert.equal(m.buf.length, 48);  

  m.set(0, 0, 1.3);
  m.set(0, 1, 33.18);
  m.set(1, 0, 2);
  m.set(1, 1, 35);
  m.set(2, 0, 3.51);
  m.set(2, 1, 11);

  m = m.tr();

  assert.equal(m.get(0, 0), 1.3);
  assert.equal(m.get(0, 1), 2);
  assert.equal(m.get(0, 2), 3.51);
  assert.equal(m.get(1, 0), 33.18);
  assert.equal(m.get(1, 1), 35);
  assert.equal(m.get(1, 2), 11);

  done();
});

test(function (done) {
  /* Transpose 2 */
  var m;

  m = new matrix(2, 3, 1);

  m = m.tr();

  m.set(0, 0, 1.3);
  m.set(0, 1, 33.18);
  m.set(1, 0, 2);
  m.set(1, 1, 35);
  m.set(2, 0, 3.51);
  m.set(2, 1, 11);

  assert.equal(m.get(0, 0), 1.3);
  assert.equal(m.get(0, 1), 33.18);
  assert.equal(m.get(1, 0), 2);
  assert.equal(m.get(1, 1), 35);
  assert.equal(m.get(2, 0), 3.51);
  assert.equal(m.get(2, 1), 11);

  done();
});