
const path = require('path');

module.exports = {
  entry: {
    script1: './src/js/script.js',
    script2: './src/js/time.js',
  },
  output: {
    filename: '[name].bundle.js', // Each entry gets its own output
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
