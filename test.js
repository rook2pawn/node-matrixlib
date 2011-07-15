var assert = require('assert');
var mlib = require('./lib/index');

console.log(mlib.matrix(3,3,0));
console.log(mlib.identity(4));
var a = mlib.identity(3);
var b = mlib.identity(3);
var c = mlib.identity(4);
assert.deepEqual(a,b);
assert.notDeepEqual(a,c);

var copyC = mlib.copy(c);
c[2][2] = 15;

console.log(c);
console.log(copyC);

assert.notDeepEqual(copyC,c);
