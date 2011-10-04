function Matrix(obj) {
    var  _matrix = undefined;
	var copy = function(matrix) {
		var newMatrix = [];
		matrix.forEach(function(row) {
			newMatrix.push(row.slice(0));
		});
		return newMatrix;
	};
	var props = {};
	props.rows = [];
	props.columns = [];
	var getDimRow = function(matrix) {
		return matrix.length;
	};
	var getDimColumn = getDimCol = function(matrix) {
		return matrix[0].length;
	};
	var getRows = function(matrix) {
		return matrix; // this library assumes row storage
	};
	var getColumns = function(matrix) {
		var columns = [];
		var i, j;
		for (j = 0; j < getDimCol(matrix); j++) {
            var a = [];
			for (i = 0; i < getDimRow(matrix); i++) {
				a[i] = matrix[i][j];
			}
			columns.push(a);
		}
		return columns;
	};
	if (obj !== undefined) {
		_matrix = copy(obj);
	}
	var matrix = function (m,n,init) { 
		var a, i, j, mat = [];
		for (i = 0; i < m; i+=1) { // foreach row
			a = [];
			for (j = 0; j < n; j+=1) { // foreach column
				a[j] = init;
			}
			mat[i] = a;
		}
		return mat;
	};
	var identity = function (n) {
		var i, mat = matrix(n,n,0);
		for (i = 0; i < n; i+=1) {
			mat[i][i] = 1;
		}
		return mat;
	};
	var transpose = function (a) {
        var dimRowA = getDimRow(a);
        var dimColA = getDimCol(a);
        var c = matrix(dimRowA,dimColA, 0);
        var j = 0; 
        for (var i = 0; i < dimRowA; i+=1) {
            for (j = i; j < dimColA; j+=1) {
                c[i][j] = a[j][i];
                c[j][i] = a[i][j];
            }
        }
	    return c;
	};
    var equals = function(a, b) {
        var dimRowA = getDimRow(a);
        var dimColA = getDimCol(a);
        var dimRowB = getDimRow(b);
        var dimColB = getDimCol(b);
        if (!((dimRowA === dimRowB) && (dimColA === dimColB))) {
            return false;
        }
        for (var i = 0; i < dimRowA; i+=1) {
            for (var j = 0; j < dimColA; j+=1) {
                if (a[i][j] !== b[i][j]) 
                    return false;    
            }
        }
        return true;
    };
	var self = {
		matrix : function(m,n,init) { 
            _matrix = matrix(m,n,init); 
            return self;
        },
		identity : function(n) { return identity(n); },
 		transpose : function(matrix) { 
            var result = undefined;
			if (matrix !== undefined) {
                result = transpose(matrix);
            } else {
			    result = transpose(_matrix);
            }
            return Matrix(result);
		},
		columns : function(matrix) {
            if (matrix === undefined) {
                matrix = _matrix;
            }
			return getColumns(matrix);
		},
		copy: function(matrix) {
            return copy(matrix);
		},
        equals : function(a,b) { 
            var _a = a;
            var _b = b;
            if (a.hasOwnProperty('identity'))
                _a = a._matrix;
            if (b.hasOwnProperty('identity')) 
                _b = b._matrix;
            return equals(_a,_b);
        },
        _matrix : _matrix       
	};
	return self;
}; 
Matrix.matrix = function(m,n,init) {
	return Matrix().matrix(m,n,init);
}
Matrix.identity = function (n) {
	return Matrix().identity(n);
};

Matrix.transpose = function (matrix) {
	return Matrix().transpose(matrix);
};
Matrix.copy = function(matrix) {
	return Matrix().copy(matrix);
}
Matrix.equals = function(a,b) {
    return Matrix().equals(a,b);
}
module.exports = Matrix;
