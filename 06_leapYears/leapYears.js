const leapYears = function(año) {
    if (año % 400 === 0) {
        return true;
    }else if(año % 100 === 0 && año % 400 !== 0  ) {
        return false;
    } else if(año % 4 === 0 && año % 100 !== 0  ){
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
