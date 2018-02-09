//https://app.codility.com/demo/results/trainingC5MPAE-DDV/
//Breakthrough was made with this algorithm - I learnt to listen or pay attention to the question,
//use all available variable and visualize
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //Initialize a hashTable
    const pods = {};
    let count = 0;
    
    for (let i = 1; i <= X; i++) {
        pods[i] = false;
    }
    
    for (let i = 0; i < A.length; i++) {
        if (pods[A[i]] === false) {
            pods[A[i]] = true;
            count++;
        }
        
        if (count === X) return i;
    }
    
    return -1;
}