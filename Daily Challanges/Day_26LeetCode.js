var maxDepth = function(s) {
    
    let maxdepth=0,depth=0
    for (let i=0; i< s.length;i++){
        if(s[i]==='('){
            depth++
        }else if(s[i]===')'){
            depth--
        }
        maxdepth=Math.max(maxdepth,depth)
    }
    return maxdepth
};