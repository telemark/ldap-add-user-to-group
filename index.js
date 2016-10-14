'use strict'

const config = require('./config')
const ldapAdd = require('./lib/ldapAdd')

let stdOpts = config

module.exports = (opts, callback) => {
  const options = Object.assign(stdOpts, opts)
  ldapAdd(options, (err, data) => {
    if (err) {
      return callback(null, err)
    } else {
      return callback(null, data)
    }
  })
}
