var threeConsecutiveOdds = function(arr) {
    for(let i =0;i<arr.length -2;i++ ){
        if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]!=0){
            return true
     
        }
        return false
    }
}    

/// way 2 

var threeConsecutiveOdds2 = function(arr) {

    let count = 0;
    for (let num of arr){
        if( num % 2 !== 0){
            count += 1;
        }else{
            count = 0;
        }

        if(count === 3){
            return true;
        }
    }

    return false;
    
};