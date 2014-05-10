var assert = require('assert');

function init(m) {
  if (m.dp) {
    m.rfn = 'readDoubleBE';
    m.wfn = 'writeDoubleBE';
    m.bpv = 8;
  } else {
    m.rfn = 'readFloatBE';
    m.wfn = 'writeFloatBE';
    m.bpv = 4;
  }

  if (!m.buf) {
    m.buf = new Buffer(m.rows * m.cols * m.bpv);
  }

  m.stride = [m.cols, 1];
}

function float2dm(rows, cols, dp) {
  assert(rows);
  assert(cols);

  this.rows = rows;
  this.cols = cols;
  this.dp = dp;
}

float2dm.prototype.get = function (i, j) {
  var ofs;

  if (!this.buf) {
    init(this);
  }

  ofs = (i * this.stride[0] + j * this.stride[1]) * this.bpv;

  return this.buf[this.rfn](ofs);
};

float2dm.prototype.set = function (i, j, v) {
  var ofs;

  if (!this.buf) {
    init(this);
  }

  ofs = (i * this.stride[0] + j * this.stride[1]) * this.bpv;

  this.buf[this.wfn](v, ofs);
};

float2dm.prototype.tr = function () {
  var cview;

  if (!this.buf) {
    init(this);
  }

  cview = new float2dm(this.rows, this.cols, this.dp);
  cview.buf = this.buf;
  
  init(cview);

  cview.stride = [this.stride[1], this.stride[0]];

  return cview;
};

module.exports = float2dm;