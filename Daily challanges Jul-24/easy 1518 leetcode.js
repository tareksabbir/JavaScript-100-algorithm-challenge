
var numWaterBottles = function(numBottles, numExchange) {
    let ans = numBottles;
    while(numBottles >= numExchange){
       let newBottles = Math.floor(numBottles / numExchange);
       let remBottle = numBottles % numExchange;
       ans = ans + newBottles ;
       numBottles = newBottles + remBottle;
    }
    return ans;
};

 //way 2

var numWaterBottles2 = function (numBottles, numExchange) {
    let totalBottles = numBottles;

    while (numBottles >= numExchange) {
        totalBottles += Math.floor(numBottles / numExchange);
        numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange);
    }

console.log(totalBottles)
};

numWaterBottles2 (15,4)