float2dm
=============
it is two-dimensional matrix with floating-point numbers. the only exported method is constructor, its signature is _(rows, cols, dp)_, where "rows" and "cols" are self-explanatory and "dp" stands for "double precision", and "dp" is optional (defaults to falsy).

it uses buffer inside.

you can .get value from it, like this:
```javascript
var matrix = require('float2dm');

var m = new matrix(2, 3, true);

m.get(1, 2) // <-- it is m[1][2]
```

you can .set values to it, like this:
```javascript
var matrix = require('float2dm');

var m = new matrix(2, 3, true);

m.set(1, 2, 3.1) // <-- it is m[1][2] = 3.1
```

you can .tr (transpose) it, like this:

```javascript
var matrix = require('float2dm');

var m = new matrix(2, 3);

m.set(1, 2, 3.2);

m.tr();

console.log(m.get(2, 1));

// prints: 3.2
```
please check your args before invoking it!


ack
========
it is of course inspired by (ndarrays)[https://github.com/mikolalysenko/ndarray/].

