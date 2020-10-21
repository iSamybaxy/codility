//https://app.codility.com/demo/results/trainingHN3YTC-AHD/
//was pretty easy
function solution(N) {
    let base = N.toString(2);
    
    //what if no zeros?
    if(base.indexOf(0) === -1) return 0;
    
    base = base.split('1');
    
    let binaryGap = 0;
    for ( let i = 0; i < binArr.length; i++ ) {
        if ( binArr[i].length > binaryGap && typeof(binArr[i+1]) === 'string') {
            binaryGap = binArr[i].length;
        }
    }
    
    return binaryGap;
}
