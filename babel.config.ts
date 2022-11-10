module.exports = function (api) {
  api.cache(false);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins: []
  };
};
