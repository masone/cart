const formatPrice = require('./format_price')

module.exports = class Cart {
  constructor () {
    this.products = {}
  }

  add (product, amount = 1) {
    const existingProduct = this.products[product.name]
    let newAmount

    if (existingProduct) {
      newAmount = existingProduct.amount += amount
    } else {
      newAmount = amount
      this.products[product.name] = product
    }

    product.setAmount(newAmount)
  }

  getTotal () {
    return this.getProducts().map((product) => {
      return product.getPrice()
    }).reduce((sum, value) => sum + value, 0)
  }

  getProducts () {
    return Object.keys(this.products).map((name) => {
      return this.products[name]
    })
  }

  toString () {
    const products = this.getProducts().map((product) => {
      return product.toString()
    }).join('\n')

    return `${products}\n\nTotal: ${formatPrice(this.getTotal())}`
  }
}
