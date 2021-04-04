const path = require('path')
const nconf = require('nconf')
const fs = require('fs')

const configFile = path.resolve(__dirname, '../', 'etc/config.yml')

nconf.formats.yaml = require('nconf-yaml')

const cfg = nconf.argv()

try {
  const stat = fs.statSync(configFile)
  if (stat && stat.isFile()) {
    cfg.file({
      file: configFile,
      format: nconf.formats.yaml
    })
  }
  cfg.env()
} catch (e) {
  cfg.env()
}

const config = {
  prefix: cfg.get('FRONTEND_PREFIX') || cfg.get('prefix') || '',
  apiUri: cfg.get('API_URI') || cfg.get('apiUri')
}

module.exports = config