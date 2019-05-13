module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        targets: {
          esmodules: true,
        },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ];
  const plugins = ['@babel/transform-runtime'];

  return {
    presets,
    plugins,
  };
};
