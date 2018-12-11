var fs = require('fs')
var request = require('supertest')

var config = require('./configs/config_mock.json')
var url = config.url

var caCert
if (config.caCertFile) {
  caCert = fs.readFileSync(config.caCertFile)
}

var preparedRequest = function () {
  return caCert ? request.agent(url, { ca: caCert }) : request(url)
}

module.exports = preparedRequest
