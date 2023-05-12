function getDivisors(x){
    divisArr = [];
    finalArr=[];
    for (let i = 1;i<= Math.sqrt(x);i++){
        if(x % i === 0){
            divisArr.push(i);
        }
    }

    for(const y of divisArr){
        finalArr.push(y);
        if(x/y != y) finalArr.push(x/y);
    }

    return finalArr.sort(function(a,b){
        if(a>b) return 1;
        else if(a===b) return 0;
        else return -1;
    });
    
};
