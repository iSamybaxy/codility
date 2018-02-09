//https://app.codility.com/demo/results/trainingZP4RXF-WA3/
//100% correctness, 50% performant
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