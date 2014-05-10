var assert = require('assert');

function float2dm(len1, len2, dp) {
  assert(len1);
  assert(len2);

  this.stride = [len2, 1];

  if (dp) {
    this.rfn = 'readDoubleBE';
    this.wfn = 'writeDoubleBE';
  } else {
    this.rfn = 'readFloatBE';
    this.wfn = 'writeFloatBE';
  }

  if (dp) {
    this.bpv = 8;
  } else {
    this.bpv = 4;
  }

  this.buf = new Buffer(len1 * len2 * this.bpv);
}

float2dm.prototype.get = function (i, j) {
  var ofs;

  ofs = (i * this.stride[0] + j * this.stride[1]) * this.bpv;

  return this.buf[this.rfn](ofs);
};

float2dm.prototype.set = function (i, j, v) {
  var ofs;

  ofs = (i * this.stride[0] + j * this.stride[1]) * this.bpv;

  this.buf[this.wfn](v, ofs);
};

float2dm.prototype.tr = function () {
  this.stride.reverse();
};

module.exports = float2dm;