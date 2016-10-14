'use strict'

const config = require('./config')
const ldapAdd = require('./lib/ldapAdd')

let options = config

module.exports = (options, callback) => {
  ldapAdd(options, (err, data) => {
    if (err) {
      return callback(null, err)
    } else {
      return callback(null, data)
    }
  })
}
