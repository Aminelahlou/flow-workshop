// @flow

function getHouse(lotSize, materials, time) {
    return {
        sqft: lotSize / 2,
        cost: sqft * materials.length * time,
    }
}

function sellHouse(house) {
    let salePrice = house.cost * 2
    let taxes = house.cost * .1
    return salePrice - taxes
}

var materials = ["boards", "nails", "paint"]
var lotSize = 4000
var time = 4 // time in months

var house = getHouse()
var profit = sellHouse(house)

console.log(`You sold your house for ${profit}`)


