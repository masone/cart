const assert = require('assert')
const {Product, Cart} = require('.')

const banana = new Product({name: 'Banana', price: 15})
const apple = new Product({name: 'Apple', price: 25})

describe('Cart', () => {
  describe('#add', () => {
    it('adds products to the list', () => {
      const cart = new Cart()
      cart.add(banana)
      cart.add(apple, 3)
      assert.equal(cart.getProducts().length, 2)
    })

    it('adds given number of products to the list', () => {
      const cart = new Cart()
      cart.add(banana, 2)
      assert.equal(cart.products['Banana'].amount, 2)
    })

    it('increases the amount when subsequently adding the same product', () => {
      const cart = new Cart()
      cart.add(banana)
      cart.add(banana, 3)
      assert.equal(cart.products['Banana'].amount, 4)
    })
  })

  describe('#getTotal', () => {
    it('returns the total price', () => {
      const cart = new Cart()
      cart.add(banana, 3)
      cart.add(apple, 2)
      assert.equal(cart.getTotal(), 95)
    })
  })
})

describe('Product', () => {
  describe('#setAmount', () => {
    it('sets the amount', () => {
      const orange = new Product({name: 'Orange', price: 30})
      orange.setAmount(5)
      assert.equal(orange.amount, 5)
    })
    it('throws an error when the amount is lower than 0', () => {
      const orange = new Product({name: 'Orange', price: 30})
      assert.throws(() => {
        orange.setAmount(-1)
      })
    })
  })
  describe('#getPrice', () => {
    it('calculates the price', () => {
      const orange = new Product({name: 'Orange', price: 30})
      orange.setAmount(6)
      assert.equal(orange.getPrice(), 180)
    })
    it('calculates a special price', () => {
      const threeForTwoPriceCalculation = function (amount, price) {
        const bundles = Math.floor(amount / 3)
        const rest = amount % 3
        return bundles * price * 2 + rest * price
      }

      const papaya = new Product({name: 'Papaya', price: 50, priceCalculation: threeForTwoPriceCalculation})
      papaya.setAmount(5)
      assert.equal(papaya.getPrice(), 200)
    })
  })
})
