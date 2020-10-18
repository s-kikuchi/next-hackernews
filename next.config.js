const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@@'] = __dirname;
    return config;
  },
}
