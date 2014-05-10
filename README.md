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

var mt;
var m = new matrix(2, 3);

m.set(1, 2, 3.2);
m.set(2, 1, 3.3);

mt = m.tr();

console.log(mt.get(2, 1));
console.log(mt.get(1, 2));

// first prints: 3.2
// then prints: 3.3
```

transpose and matrix itself are different views over the same buffer. they internally reference the elements of underlying buffer a bit differently.

the buffer and internal state of matrix will not be initialized until you call .tr or .get or .set on it.

also feel free to get values of .rows and .cols attributes of float2dm matrix.

please check your args before invoking it!


ack
========
it is of course inspired by [ndarrays](https://github.com/mikolalysenko/ndarray/).

