const sumAll = function(n1, n2) {
    let total = 0;

    if (n1 > n2) {
        for (let i = n2; i <= n1; i++) {  // Comienza en n2
            total += i;                   // Suma i a total
        }
    } else {
        for (let i = n1; i <= n2; i++) {  // Comienza en n1
            total += i;                   // Suma i a total
        }
    
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
