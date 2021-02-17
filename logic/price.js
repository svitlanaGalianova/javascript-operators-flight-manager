"use strict"

function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation) {
        return basePrice + (passengerVariation / 100 * basePrice) + (flightVariation / 100)
            * (basePrice + (passengerVariation / 100) * basePrice)
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        //"economy" and "business"
        // Economy flight: -3%
        // Business flight: +10%
        var flightVariation = (flightType.toLowerCase() == "economy") ? -3 : 10

        //"regular" and "VIP"
        // Regular passenger: -5%
        // VIP passenger: +5%
        var passengerVariation = (passengerType.toLowerCase() == "regular") ? -5 : 5

        return calculateFinalPrice(basePrice, passengerVariation, flightVariation)
    }

    function calculateTotalFinalPrice(numOfSeats, passengerType, flightType, basePrice) {
        return numOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType)
    }

    return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice }
}

module.exports = Prices()

