const ldap = require('ldapjs')
const addToGroup = require('./addToGroup')
const search = require('./search')

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required input'), null)
  }
  if (!options.ldapUrl) {
    return callback(new Error('Missing required input: options.ldapUrl'))
  }
  if (!options.bindDn) {
    return callback(new Error('Missing required input: options.bindDn'))
  }
  if (!options.bindSecret) {
    return callback(new Error('Missing required input: options.bindSecret'))
  }
  if (!options.username) {
    return callback(new Error('Missing required input: options.username'))
  }
  if (!options.filter) {
    return callback(new Error('Missing required input: options.filter'))
  }
  if (!options.scope) {
    return callback(new Error('Missing required input: options.scope'))
  }
  if (!options.attributes) {
    return callback(new Error('Missing required input: options.attributes'))
  }
  if (!options.baseDn) {
    return callback(new Error('Missing required input: options.baseDn'))
  }
  if (!options.groupDn) {
    return callback(new Error('Missing required input: options.groupDn'))
  }

  options.client = ldap.createClient({
    url: options.ldapUrl
  })

  options.client.bind(options.bindDn, options.bindSecret, (err) => {
    if (err) {
      return callback('bind error' + err)
    }
  })

  search(options, (err, data) => {
    if (err) {
      return callback(err)
    } else {
      console.log('Searching user: ' + data.entry.cn + ' (' + data.entry.dn + ')')
      options.dn = data.entry.dn
    }
    addToGroup(options, (err, data) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, data)
      }
    })
  })
}
