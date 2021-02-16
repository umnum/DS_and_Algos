function numberOfWaysToMakeChange(n, denoms) {
	// array storing number of ways to make change
	// for each denomination from 0 to n inclusive
	let numWays = new Array(n + 1).fill(0), i = 0;
	for (numWays[0] = 1; i < denoms.length; i++) {
		for (let change = 1; change <= n; change++) {
			if (denoms[i] <= change) {
				numWays[change] += numWays[change - denoms[i]];
			}
		}
	}
	return numWays[n];
}
