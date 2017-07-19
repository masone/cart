// TODO: money library
const {Product, Cart} = require('@r3pi/cart')

const threeForTwoPriceCalculation = function (amount, price) {
  const bundles = Math.floor(amount / 3)
  const rest = amount % 3
  return bundles * price * 2 + rest * price
}

const availableProducts = {
  banana: new Product({
    name: 'Banana', price: 15
  }),
  apple: new Product({
    name: 'Apple', price: 25
  }),
  orange: new Product({
    name: 'Orange', price: 30
  }),
  papaya: new Product({
    name: 'Papaya', price: 50, priceCalculation: threeForTwoPriceCalculation
  })
}

const cart = new Cart()

cart.add(availableProducts.orange)
cart.add(availableProducts.banana, 500)
cart.add(availableProducts.papaya, 5)
cart.add(availableProducts.apple, 1)
cart.add(availableProducts.apple, 1)

console.log(cart.toString())
