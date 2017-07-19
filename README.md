## Usage

### Create a product

```
{Product} = require('@r3pi/product')
const banana = new Product({name: 'Banana', price: 15})
```

The price is defined as a non-floating-point number in cents.

By default the total price is calculated by multiplying the amount with the products price. 
You can also pass the product a custom function for calculating the price though.
```
const fiftyPercentOff = function (amount, price) {
  return amount * price / 100 * 50
}
const discountedBanana = new Product({name: 'Discounted Banana', price: 15, priceCalculation: fiftyPercentOff})
```

### Create a cart
```
{Cart} = require('@r3pi/cart')
const cart = new Cart()
```

You can then add the desired number of products to the cart. 
```
cart.add(banana, 5)
cart.add(banana, 3)
```

If you don't specify an amount, it assumes 1.
```
cart.add(banana)
```

Want to know the total price of your cart?
```
console.log(cart.toString())
```

## Demo

The following demo adds a couple of products to the cart and prints a receipt.

`npm run demo`

## Tests

`npm test`
