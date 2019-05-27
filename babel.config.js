module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ];
  const plugins = [['@babel/transform-runtime', { corejs: 3 }]];

  return {
    presets,
    plugins,
  };
};
