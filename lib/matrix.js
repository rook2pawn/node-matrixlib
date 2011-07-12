function matrix() {
	var self = {
		matrix : function (m,n,init) { 
			var a, i, j, mat = [];
			for (i = 0; i < m; i+=1) {
				a = [];
				for (j = 0; j < n; j+=1) {
					a[j] = init;
				}
				mat[i] = a;
			}
			return mat;
		},
		identity : function (n) {
			var i, mat = this.matrix(n,n,0);
			for (i = 0; i < n; i+=1) {
				mat[i][i] = 1;
			}
			return mat;
		},
		transpose : function(matrix) {
		}
	};
	return self;
};
 
matrix.matrix = function(m,n,init) {
	return matrix().matrix(m,n,init);
}
matrix.identity = function (n) {
	return matrix().identity(n);
};

matrix.transpose = function (matrix) {
	return matrix().transpose(matrix);
};
module.exports = matrix;
