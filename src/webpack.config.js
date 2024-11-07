const path = require('path');

module.exports = {
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'bundle.js',
  },
}