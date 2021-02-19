var removeKdigits = function(num, k) {
    if (num.length === 0) return "0";
    num = num.split('');
    let leftNums = [num[0]];
    for (let i = 1, trailingZeros = leftNums[0] === "0"; i < num.length && k >= 0; i++) {
        if (trailingZeros && num[i] === "0") {
            continue;
        }
        else {
            trailingZeros = false;
        }
        let currNum = num[i]
        let leftNumsPeek = leftNums[leftNums.length - 1];
        if (currNum < leftNumsPeek && k > 0) {
            leftNums.pop();
            k--;
        }
        leftNums.push(currNum)
    }
    while (leftNums.length > 0 && k > 0) {
        leftNums.pop();
        k--;
    }
    
    for (let i = 0; i < leftNums.length; i++) {
        if (leftNums[i] !== "0") {
           if (i === 0) break;
           leftNums = leftNums.slice(i);
            break;
        }
        else if (i === leftNums.length - 1) {
            leftNums = [];
        }
    }
    return leftNums.length > 0 ? leftNums.join('') : "0";
};
