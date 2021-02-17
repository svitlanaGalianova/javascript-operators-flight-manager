function Flights() {
    function calculateNumberOfFlights(numOfPassengers, flightCapacity) {
        if (!Number.isInteger(numOfPassengers) || numOfPassengers < 0)
            throw Error("The number of passengers must be a positive integer value")
        if (!Number.isInteger(flightCapacity) || flightCapacity < 0)
            throw Error("The capacity of the flight must be a positive integer value")

        //If the number of passengers is multiple of the capacity
        //you will need a number of flights equal to the number of passengers divided by the capacity
        return (numOfPassengers % flightCapacity == 0)
            ? numOfPassengers / flightCapacity : (numOfPassengers - numOfPassengers % flightCapacity) / flightCapacity + 1
    }
    function checkAircraftRevision(distanceLimit, distancesArray) {
        totalDistance = 0

        distancesArray.forEach(distance => {
            totalDistance += distance
        })

        message = (totalDistance <= distanceLimit / 2) ?
            "The revision needs to be done within the next 3 months" :
            (totalDistance > distanceLimit / 2 & totalDistance <= (distanceLimit / 3) * 2) ?
                "The revision needs to be done within the next 2 months" :
                (totalDistance > (distanceLimit / 3) * 2 & totalDistance <= distanceLimit) ?
                    "The revision needs to be done within the next month" : null

        if (message != null)
            return message
        throw Error()
    }

    return { calculateNumberOfFlights, checkAircraftRevision }
}

module.exports = Flights()
