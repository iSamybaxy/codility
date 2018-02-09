//https://app.codility.com/demo/results/trainingHN3YTC-AHD/
function solution(N) {
    let base = N.toString(2);
    
    //what if no zeros?
    if(base.indexOf(0) === -1) return 0;
    
    base = base.split('1');
    //case when final index contains zeros?
    if( base[base.length - 1] !== '' ) base.pop();
    
    let binaryGap = 0;
    for (let digits of base) {
        if( digits.length > binaryGap ) binaryGap = digits.length;   
    }
    
    return binaryGap;
}