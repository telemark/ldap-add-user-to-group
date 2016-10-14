'use strict'

module.exports = (options, callback) => {
  const client = options.client

  const opts = {
    filter: options.filter.replace('{{username}}', options.user),
    scope: options.scope,
    attributes: options.attributes
  }

  let entryRes = {}

  client.search(options.baseDn, opts, (err, res) => {
    if (err) {
      return callback(err)
    }

    res.on('searchEntry', (entry) => {
      entryRes = entry.object
    })
    res.on('searchReference', (referral) => {
      console.log('referral: ' + referral.uris.join())
    })
    res.on('error', (err) => {
      return callback(err)
    })
    res.on('end', (result) => {
      result.entry = entryRes
      return callback(null, result)
    })
  })
}
