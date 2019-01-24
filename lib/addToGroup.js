module.exports = (options, callback) => {
  const ldap = require('ldapjs')
  const client = options.client
  const dn = options.dn
  const groupDn = options.groupDn

  const change = new ldap.Change({
    operation: 'add',
    modification: {
      member: [dn]
    }
  })

  client.modify(groupDn, change, (err, res) => {
    if (err) {
      return callback(new Error('Looks like group add FAILED: ' + err))
    } else {
      return callback(null, 'Looks like group add WORKED: ' + res)
    }
  })
}
