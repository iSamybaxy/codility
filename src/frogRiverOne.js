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

//A more performant solution
//https://app.codility.com/demo/results/training4TZYUG-2YP/
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sequence = [0];
    let position = -1;
    let counter = 0;

    if (X === 1 && A[0] === 1) return 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= X) {
            if (!sequence[A[i]]) counter++;
            sequence[A[i]] = A[i];

            if (counter === X) return i;
        }
    }

    return -1;
}