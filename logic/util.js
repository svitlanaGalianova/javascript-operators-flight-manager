function Util() {
    function calculateTotalDistributedPassengers(distributions) {
        total = 0
        for (var key in distributions)
            total += distributions[key]

        return total
    }

    function calculateTotalNumberOfPassengers(passengersArray) {
        return passengersArray.reduce((a, b) => a + b, 0)
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers }
}

module.exports = Util()

