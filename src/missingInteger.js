https://app.codility.com/demo/results/trainingZAE3R8-P26/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let b = A.sort((a,b) => Math.abs(a) - Math.abs(b));
    return b.reduce((acc, num) => {
        (acc === num) ? acc++ : acc;
        return acc;
    }, 1);
}