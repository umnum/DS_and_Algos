var findJudge = function(N, trust) {
    let isTrusting = new Array(N).fill(false);
    let trustCount = {};
    for (let i = 1; i <= N; i++) {
        trustCount[i] = 0;
    }

    for (let i = 0; i < trust.length; i++) {
        isTrusting[trust[i][0]-1] = true;
        trustCount[trust[i][1]]++;
    }

    for (let i = 0; i < N; i++) {
        if (!isTrusting[i] && trustCount[i+1] === N - 1) return i + 1;
    }
    return -1;
};
