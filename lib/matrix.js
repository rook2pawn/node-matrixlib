function matrix(m,n,init) { 
	var a, i, j, mat = [];
	for (i = 0; i < m; i+=1) {
		a = [];
		for (j = 0; j < n; j+=1) {
			a[j] = init;
		}
		mat[i] = a;
	}
	return mat;
};

function identity(n) {
	var i, mat = matrix(n,n,0);
	for (i = 0; i < n; i+=1) {
		mat[i][i] = 1;
	}
	return mat;
};

exports.matrix = matrix;
exports.identity = identity;
