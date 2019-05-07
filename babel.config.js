module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      'env',
      {
        targets: {
          esmodules: true,
        },
        useBuiltIns: 'usage',
      },
    ],
    'react',
    'typescript',
  ];
  const plugins = ['transform-runtime'];

  return {
    presets,
    plugins,
  };
};
