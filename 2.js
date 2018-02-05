// @flow

type House = {
  sqft: number,
  cost: number,
}
type Months = number
function getHouse(lotSize: number, materials: string[], time: Months): House {
    const sqrt = lotSize / 2
    return {
        sqft: lotSize / 2,
        cost: sqrt * materials.length * time,
    }
}

function sellHouse(house: House): number {
    const salePrice = house.cost * 2
    const taxes = house.cost * .1
    return salePrice - taxes
}

var materials = ["boards", "nails", "paint"]
var lotSize = 4000
var time = 4 // time in months

var house = getHouse(lotSize, materials, time)
var profit = sellHouse(house)

console.log(`You sold your house for ${profit}`)
