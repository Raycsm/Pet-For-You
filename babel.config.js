module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel',
      "expo-image-picker", {
        "photosPermission": "The app accesses your photos to let you share them with your friends."
      }],
      },
    },
  };
};
