"use strict"

function Util() {
    function calculateTotalDistributedPassengers(distributions) {
        var total = 0
        for (var key in distributions)
            total += distributions[key]

        return total
    }

    function calculateTotalNumberOfPassengers(passengersArray) {
        return passengersArray.reduce((a, b) => a + b, 0)
    }

    function checkInput(input) {
        if (!input || isNaN(input))
            throw Error()
    }

    function calculateTotalDistance(distancesArray) {
        var total = 0

        distancesArray.forEach(distance => {
            if (distance > 0)
                total += distance
        })

        return total
    }

    function calculateBonusPoints(businessDistancesArray, economyDistancesArray,
        businessBonusPercent, economyBonusPercent) {
        //Calculate business/economy points by taking the total distance traveled by business/economy seats, 
        //and multiplying it by the business/economy bonus percent.
        return calculateTotalDistance(businessDistancesArray) * businessBonusPercent / 100 +
            calculateTotalDistance(economyDistancesArray) * economyBonusPercent / 100
    }

    return {
        calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput,
        calculateTotalDistance, calculateBonusPoints
    }
}

module.exports = Util()

