"use strict"

function Passengers() {
    function checkFlightCapacity(flightCapacity, passengerNumbersArray) {
        var totalNumberOfPassengers = 0

        passengerNumbersArray.forEach(number => {
            totalNumberOfPassengers += number
        })

        if (totalNumberOfPassengers < flightCapacity)
            return totalNumberOfPassengers
        throw Error()

    }

    function distributeAllSeatsToAllPassengers(numOfVip, numOfPassengers, numOfFlights,
        numOfBusinessSeats, numOfEconomySeats) {
        var distribution = {
            vipPassengersWithEconomySeats: 0,
            regularPassengersWithBusinessSeats: 0
        }

        numOfBusinessSeats *= numOfFlights
        numOfEconomySeats *= numOfFlights
        //First, assign VIP passengers to business seats
        distribution.vipPassengersWithBusinessSeats = (numOfBusinessSeats <= numOfVip) ?
            numOfBusinessSeats : numOfVip

        numOfVip = (distribution.vipPassengersWithBusinessSeats <= numOfVip) ?
            numOfVip - distribution.vipPassengersWithBusinessSeats : 0

        numOfBusinessSeats = (distribution.vipPassengersWithBusinessSeats <= numOfBusinessSeats) ?
            numOfBusinessSeats - distribution.vipPassengersWithBusinessSeats : 0

        //if there are still VIP passengers, assign them to economy seats, 
        //until either the VIP passengers or the economy seats are consumed.
        if (numOfVip != 0) {
            [distribution.vipPassengersWithEconomySeats, numOfVip, numOfEconomySeats] =
                (numOfEconomySeats <= numOfVip) ?
                    [numOfEconomySeats, numOfVip - numOfEconomySeats, 0] : [numOfVip, 0, numOfEconomySeats - numOfVip]
        }

        //if there are still business seats, assign regular passengers to business seats, 
        //until either the regular passengers or the business seats are consumed.

        if (numOfBusinessSeats != 0) {
            [distribution.regularPassengersWithBusinessSeats, numOfPassengers] = (numOfBusinessSeats <= numOfPassengers) ?
                [numOfBusinessSeats, numOfPassengers - numOfBusinessSeats] : [numOfPassengers, 0]
        }
        //if there are still economy seats, assign regular passengers to economy seats, 
        //until either the regular passengers or the economy seats are consumed
        if (numOfPassengers != 0) {
            distribution.regularPassengersWithEconomySeats = (numOfEconomySeats <= numOfPassengers) ?
                numOfEconomySeats : numOfPassengers

        }

        return distribution
    }

    return { checkFlightCapacity, distributeAllSeatsToAllPassengers }
}

module.exports = Passengers()

