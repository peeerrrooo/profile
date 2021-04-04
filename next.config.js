const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSourceMaps = require('@zeit/next-source-maps')
const withOffline = require('next-offline')
const config = require('./config')

const wrapper = withSourceMaps(withFonts(withImages({
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

const resolve = () => {
    if (process.env.NODE_ENV === 'production') {
        return withOffline(wrapper)
    }
    return wrapper
}

module.exports = resolve()