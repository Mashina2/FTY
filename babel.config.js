const pak = require('./package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module-resolver',
    'react-native-reanimated/plugin',
  ],
};
