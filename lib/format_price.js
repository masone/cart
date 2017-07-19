const numeral = require('numeral')

module.exports = (price) => numeral(price / 100).format('0,0.00')
