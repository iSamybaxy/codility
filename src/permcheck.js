//https://app.codility.com/demo/results/trainingHW8UCU-MKP/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let isPermutation = 1;
    let sorted = A.sort((a,b) => Math.abs(a) - Math.abs(b));
    
    if (A[0] !== 1) return 0;
    sorted.reduce((acc, num) => {
        if (acc + 1 !== num) {
            isPermutation = 0;
            return acc;
        } else return acc+1;
    });
    
    return isPermutation;
}