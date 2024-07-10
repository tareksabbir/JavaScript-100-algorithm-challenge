var minOperations = function (logs) {
    let counter = 0;
    for (let log of logs) {
        if (log === './') continue;
        if (log === '../') {
            if (counter > 0) counter--;
        } else counter++;
    }
    return counter;
};