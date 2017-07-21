function formatAmount(amount) {
	return amount.toString()
}

console.log(formatAmount(10.1111111111))
console.log(formatAmount("10.11"))
console.log(formatAmount(10.11))
console.log(formatAmount("10.1112131415"))
console.log(formatAmount(0))
console.log(formatAmount("0"))

// once flow warns on these you can remove
console.log(formatAmount())
console.log(formatAmount({ amount: 10 }))
