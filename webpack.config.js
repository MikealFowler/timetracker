const path = require('path');

module.exports = {
  entry: {
    loginScript: './src/js/loginScript.js',
    timezoneScript: './src/js/timezoneScript.js',
  },
  output: {
    filename: '[name].bundle.js', // Each entry gets its own output
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};