function taskAssignment(k, tasks) {
	console.log(tasks)
  // Write your code here.
	let pos = {}
	let pairs = [];
	for (let i = 0; i < 2*k; i++) {
		if (pos[tasks[i]]) {
			pos[tasks[i]].push(i);
		}
		else {
			pos[tasks[i]] = [i];
		}
	}
	tasks.sort((a,b) => {return a-b});
	while (tasks.length > 0) {
		let pair = [pos[tasks.shift()].shift(), pos[tasks.pop()].shift()];
		pairs.push(pair);
	}
  return pairs;
}
