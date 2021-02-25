function levenshteinDistance(str1, str2) {
  // Write your code here.
	let str1Length = str1.length;
	let str2Length = str2.length;
	if (str1Length === 0 || str2Length === 0) {
		return Math.abs(str1Length - str2Length);
	}
	let editMatrix = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0));
	for (let i = 0; i <= str1.length; i++) {
		editMatrix[i][0] = i;
	}
	for (let i = 0; i <= str2.length; i++) {
		editMatrix[0][i] = i;
	}
	for (let i = 0; i < str1.length; i++) {
		for (let j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j]) {
				editMatrix[i+1][j+1] = editMatrix[i][j];
			}
			else {
				let left = editMatrix[i][j+1];
				let diag = editMatrix[i][j];
				let up = editMatrix[i+1][j];
				editMatrix[i+1][j+1] = Math.min(Math.min(left, diag), up) + 1;
			}
		}
	}
	return editMatrix[str1.length][str2.length];
}
