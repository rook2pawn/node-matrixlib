Matrixlib
=========

Add matrix support and routines to nodejs

Methods
=======

.matrix(m,n,init)
-----------------
Create a matrix *m* by *n* (m rows, n columns) with initial value *init*

Example
	// 4x4 matrix filled with 0
	var mlib = require('matrixlib');
	var myMatrix = mlib.matrix(4,4,0);
