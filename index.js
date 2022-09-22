const returnFirstTwoDrivers = ([Antonia, Nuru, Amari, Mo]) => [Antonia, Nuru]
const returnLastTwoDrivers = ([Antonia, Nuru, Amari, Mo]) => [Amari, Mo]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    return function(fare) {
        return fare ** 2;
    }
}
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function(fare) {return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => 
createFareMultiplier(3)(fare);

function selectDifferentDrivers (arrayOfDrivers, returnFirstTwoDrivers) {
    {return returnFirstTwoDrivers()
    }
    arrayOfDrivers(selectDifferentDrivers)
}