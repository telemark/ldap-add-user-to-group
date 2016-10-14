'use strict'

module.exports = {
  ldapUrl: process.env.LAUG_LDAP_URL || 'ldap://hostname:389',
  bindDn: process.env.LAUG_LDAP_BIND_DN || 'CN=thisuser,OU=TFK,DC=my,DC=domain,DC=no',
  bindSecret: process.env.LAUG_LDAP_BIND_SECRET || 'secret',
  filter: process.env.LAUG_LDAP_FILTER || '(sAMAccountName={{username}})',
  scope: process.env.LAUG_LDAP_SCOPE || 'sub',
  attributes: process.env.LAUG_LDAP_ATTRIBUTES || ['dn', 'sn', 'cn'],
  baseDn: process.env.LAUG_LDAP_BASE_DN || 'OU=TFK,dc=my,dc=domain,DC=no',
  groupDn: process.env.LAUG_LDAP_GROUP_DN || 'CN=groupName,OU=TFK,DC=my,DC=domain,DC=no'
}
