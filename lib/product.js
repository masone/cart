const formatPrice = require('./format_price')

module.exports = class Product {
  constructor ({name, price, priceCalculation}) {
    this.amount = 1
    this.name = name
    this.price = price
    this.priceCalculation = priceCalculation
  }

  setAmount (amount) {
    if (amount >= 0) {
      this.amount = amount
    } else {
      throw new Error(`Invalid amount ${amount} for product ${this.name}`)
    }
  }

  getPrice () {
    if (typeof this.priceCalculation === 'function') {
      return this.priceCalculation(this.amount, this.price)
    } else {
      return this.amount * this.price
    }
  }

  toString () {
    return `${this.amount} ${this.name}: ${formatPrice(this.getPrice())}`
  }
}
