function riverSizes(matrix) {
  // Write your code here.
	let riverSizesArray = [];
	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[0].length; c++) {
			let riverSize = 0;
			if (matrix[r][c] === 1) {
				matrix[r][c] = -1;
				riverSize = 1 + exploreRiver(matrix,r,c);
				riverSizesArray.push(riverSize);
			}
		}
	}
	return riverSizesArray;
}

function exploreRiver(matrix,r,c) {
	let size = 0;
	if (c - 1 >= 0 && matrix[r][c-1] === 1) {
		matrix[r][c-1] = -1;
		size += 1 + exploreRiver(matrix,r,c-1);
	}
	// explore right
	if (c + 1 < matrix[0].length && matrix[r][c+1] === 1) {
		matrix[r][c+1] = -1;
		size += 1 + exploreRiver(matrix,r,c+1);
	}
	// explore up
	if (r - 1 >= 0 && matrix[r-1][c] === 1) {
		matrix[r-1][c] = -1;
		size += 1 + exploreRiver(matrix,r-1,c);
	}
	// explore down
	if (r + 1 < matrix.length && matrix[r+1][c] === 1) {
		matrix[r+1][c] = -1;
		size += 1 + exploreRiver(matrix,r+1,c);
	}
	return size;
}
