function removeIslands(matrix) {
	let width = matrix[0].length;
	let height = matrix.length;
	// mark top and bottom row
	for (let i = 0; i < width; i++) {
		if (matrix[0][i] === 1) {
			markOnes(matrix, 0, i)
		}
		if (matrix[height-1][i] === 1) {
			markOnes(matrix, height-1, i)
		}
	}
	// left and right column
	for (let i = 0; i < height; i++) {
		if (matrix[i][0] === 1) {
			markOnes(matrix, i, 0)
		}
		if (matrix[i][width-1] === 1) {
			markOnes(matrix, i, width-1)
		}
	}
	// remove unmarked islands and unmark the marked positions
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (matrix[i][j] < 0) {
				matrix[i][j] = 1;
			}
			else if (matrix[i][j] > 0) {
				matrix[i][j] = 0;
			}
		}
	}
  return matrix;
}

function markOnes(matrix, r, c) {
	// mark current 1 as negative
	matrix[r][c] = -1;
	// look up
	if (r-1 >= 0 && matrix[r-1][c] === 1) {
		markOnes(matrix,r-1,c);
	}
	// look down
	if (r+1 < matrix.length && matrix[r+1][c] === 1) {
		markOnes(matrix,r+1,c);
	}
	// look left
	if (c-1 >= 0 && matrix[r][c-1] === 1) {
		markOnes(matrix,r,c-1);
	}
	// look right
	if (c+1 < matrix[0].length && matrix[r][c+1] === 1) {
		markOnes(matrix,r,c+1);
	}
}
