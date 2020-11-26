module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['relay'], ['@babel/plugin-proposal-decorators', {legacy: true}]],
};
