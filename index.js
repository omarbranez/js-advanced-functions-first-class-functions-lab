// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
   return driverArray.slice(0, 2)
}

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = (multiplier) => {
    return (value) => {
        return value * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = ( driverArray, driverFunction ) => {
    return driverFunction(driverArray)
}