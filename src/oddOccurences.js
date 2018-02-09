//https://app.codility.com/demo/results/training82JV6C-8EZ/
function solution(A) {
    if(A.length === 1) return A[0];
    
    //Sort the Array
    A.sort((a,b) => a - b);
    
    for(let i = 0; i < A.length; i += 2) {
        if(A[i] !== A[i+1]) return A[i];   
    }
}

//Prefer this solution which is 100% performant
//https://app.codility.com/demo/results/trainingA5NBKT-GZH/
function solution(A) {
    //we'll use the bitwise xor operator which should be more performant
    let num = 0;
    for(let i = 0; i < A.length; i++) {
        //All pairs would cancel each other out and leave the unpaired number
        num = num ^ A[i];   
    }
    
    return num;
}
//Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones)