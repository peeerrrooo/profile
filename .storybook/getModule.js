const babel = require('../babel.config')

module.exports = () => ({
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: babel
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.((woff(2)?)|ttf|eot|otf)(\?[\d#&.=a-z]+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif|svg|doc|docx)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'resources/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
})
