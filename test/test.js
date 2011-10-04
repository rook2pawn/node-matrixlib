var mlib = require('../lib/index');
var a = mlib.identity(3);
var b = mlib.identity(3);
var c = mlib.identity(4);
exports.testIdentityProduction = function(test) {
    test.expect(2);
    test.deepEqual(a,b);
    test.notDeepEqual(a,c);
    test.done();
}
exports.testCopyAndAlter = function(test) {
    test.expect(1);
    var copyC = mlib.copy(c);
    c[2][2] = 15;
    test.notDeepEqual(copyC,c);
    test.done();
}

exports.testGetColumns = function(test) {
    var matrixtest = mlib([[1,2,3],[4,5,6],[7,8,9]]);
    test.expect(1);
    test.deepEqual([[1,4,7],[2,5,8],[3,6,9]], matrixtest.columns());
    test.done();
};

exports.testEquality = function(test) {
    var a = mlib.identity(4);
    var b = mlib.identity(4);
    test.expect(1);
    test.equals(true, mlib.equals(a,b));
    test.done();
};
exports.testTranspose = function(test) {
    var a = mlib([[1,2,3],[4,5,6],[7,8,9]]);
    var a_t = a.transpose();
    test.expect(1);
    test.deepEqual(true, mlib.equals(a._matrix, a_t.transpose()._matrix));
    test.done();
};
