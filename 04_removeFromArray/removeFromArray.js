const removeFromArray = function(...args) {
    let array = args[0];
    let newArray = [];
    
    array.forEach((element) => {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    });
    
    return newArray;
    }
// Do not edit below this line
module.exports = removeFromArray;
