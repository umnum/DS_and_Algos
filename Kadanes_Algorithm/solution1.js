function kadanesAlgorithm(array) {
  // Write your code here.
	let currSum = array[0];
	let maxSum = currSum;
	for (let i = 1; i < array.length; i++) {
		let num = array[i];
		if (num >= 0) {
			currSum += num;
			if (currSum > maxSum) {
				maxSum = currSum;
			}
			if (num > maxSum) {
				maxSum = num;
			}
		}
		else if ( currSum + num > 0) {
			currSum += num;
		}
		else if (num > maxSum) {
			maxSum = num;
		}
		else {
			currSum = 0;
		}
	}
	return maxSum;
}
