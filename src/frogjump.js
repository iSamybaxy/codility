//https://app.codility.com/demo/results/trainingF3WYRA-P8Y/
function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    const frogsCurrentPosition = X;
    const destination = Y;
    const jumps = D;
    
    if (frogsCurrentPosition >= destination) return 0;

    const difference =  destination - frogsCurrentPosition;
    const count = Math.ceil(difference / jumps);
    
    return count;
}