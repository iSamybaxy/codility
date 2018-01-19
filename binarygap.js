
//'https://app.codility.com/demo/results/trainingZHDRTV-5HC/';
function solution(N) {
    let base = N.toString(2);
    if(base.indexOf(0) === -1) return 0;
    
    base = base.split('1');
    if(base.indexOf([base.length - 1]) !== '') base.pop();
    
    let gap = 0;
    for(let zeros of base) {
    if(zeros.length > gap) gap = zeros.length;
    }
    
    return gap;
}