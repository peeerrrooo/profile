const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSourceMaps = require('@zeit/next-source-maps')
const config = require('./config')

module.exports = withSourceMaps(withFonts(withImages({
    basePath: config.prefix,
    assetPrefix: config.prefix,
    devtool: 'source-map',
    pageExtensions: ['ts', 'tsx', 'json', 'css'],
    webpack: config => {
        config.resolve.extensions.push('.ts', '.tsx', '.json', '.css')

        return config
    },
    distDir: 'build',
    publicRuntimeConfig: config,
    inlineImageLimit: 1048576
})))