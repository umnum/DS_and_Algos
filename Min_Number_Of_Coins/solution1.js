function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
	let coinDenomsUpToN = new Array(n + 1).fill(Infinity);
	coinDenomsUpToN[0] = 0;
	for (let i = 0; i < denoms.length; i++) {
		for (let change = 0; change < coinDenomsUpToN.length; change++) {
			if (denoms[i] <= change) {
				coinDenomsUpToN[change] = Math.min(coinDenomsUpToN[change], coinDenomsUpToN[change - denoms[i]] + 1);
			}
		}
	}
	return coinDenomsUpToN[n] !== Infinity ? coinDenomsUpToN[n] : -1;
}
