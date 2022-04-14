const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = api => {
  api.cache(true);

  console.info(
    '[Babel] babel.config.js; NODE_ENV: ',
    process.env.NODE_ENV || 'development'
  );
  const presets = [
    [
      '@babel/preset-env',
      {
        debug: false,
        targets: isTest ? { node: 'current' } : '> 0.25%, not dead',
        useBuiltIns: 'usage',
        corejs: '3.6',
        modules: isTest ? 'commonjs' : false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    isTest ? 'babel-plugin-dynamic-import-node' : null,
    'lodash',
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
