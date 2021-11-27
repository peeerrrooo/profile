module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          ui: './src/ui',
          components: './src/components',
          models: './src/models',
          providers: './src/providers',
          resources: './src/resources',
          styles: './src/styles',
          hooks: './src/hooks',
          utils: './src/utils'
        },
        extensions: ['.wasm', '.json', '.ts', '.tsx', '.css']
      }
    ]
  ]
}
