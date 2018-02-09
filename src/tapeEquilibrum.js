//https://app.codility.com/demo/results/trainingZP4RXF-WA3/
//100% correctness, 83% performant: Haven't cracked this yet!
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const values = []
    let sumA = 0, sumB = 0;
    for (let i = 0; i < A.length - 1; i++) {
        let firstArr = A.slice(0, i + 1);
        let secondArr = A.slice(i + 1);
        
        if(firstArr.length > 0) {
            sumA = firstArr.reduce((total, num) => total + num);
        }
        
        if (secondArr.length > 0) {
            sumB = secondArr.reduce((total, num) => total + num);
        }
        
        //console.log(sumA, sumB);
        values.push(Math.abs(sumA - sumB));
    }
    
    return Math.min(...values);
}

function tapeEquilibrium(A) {
    var p, idx;
    var leftSum = 0, rightSum = 0;
    var totalSum = 0;
    var lastMin, currentMin;
    var N = A.length;
    
    if (N == 2) { return Math.abs(A[0] - A[1]); }
    if (N == 1) { return Math.abs(A[0]); }
    
    for (idx = 0; idx < N; idx++) {
        totalSum = totalSum + A[idx];
    }
    
    lastMin = Math.abs(totalSum - A[0] - A[0]);
    
    for (p = 1; p <= N-1; p++) {
        leftSum += A[p - 1];
        rightSum = totalSum - leftSum;
        currentMin = Math.abs(leftSum - rightSum);
        lastMin = (currentMin < lastMin) ? currentMin : lastMin;
    }
    
    return lastMin;    
}