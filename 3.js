// @flow

function formatAmount(amount: number | string): string {
	return amount.toString()
}

console.log(formatAmount(10.1111111111))
console.log(formatAmount("10.11"))
console.log(formatAmount(10.11))
console.log(formatAmount("10.1112131415"))
console.log(formatAmount(0))
console.log(formatAmount("0"))
