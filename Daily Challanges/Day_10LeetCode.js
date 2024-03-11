var customSortString = function(order, s) {
   
    const charCount = new Map();
    
    
    for (const char of order) {
        charCount.set(char, 0);
    }

  
    for (const char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        }
    }

   
    let sortedS = '';
    for (const char of order) {
        sortedS += char.repeat(charCount.get(char));
    }

   
    for (const char of s) {
        if (!order.includes(char)) {
            sortedS += char;
        }
    }

    return sortedS;
};



// way 2
var customSortString2 = function(order, string) {
    let map = {};
     for(let i = 0; i < order.length; i++) {
         map[order[i]] = i
     }
     for(let i = 0; i < string.length; i++) {
         if(map[string[i]] == undefined) {
             map[string[i]] = Infinity
         }
     }
     string = string.split("")
     return string.sort((a, b) => map[a] - map[b]).join("")
 };
 console.log(customSortString2("cba", "abcd"))