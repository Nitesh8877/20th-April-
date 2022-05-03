let one = [
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ]];
    
    let two = [
        [ 1, 2 ], 
        [ 3, 4 ],
        [ 5, 6 ]];
    
    let r1 = one.length;
    let c1 = one[0].length;
    let r2 = two.length;
    let c2 = two[0].length;
    
    let res = [...Array(r1)].map(e => Array(c2));
    
    for(let i = 0; i < res.length; i++) {
        for(let j = 0; j < res[0].length; j++) {
    
            let sum = 0;
    
            for(let k = 0; k < c1; k++) {
                let val = one[i][k] * two[k][j];
                sum += val;
            }
            res[i][j] = sum;
        }
    }
    
    console.log(res);