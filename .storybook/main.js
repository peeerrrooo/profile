const path = require('path')
const getModule = require('./getModule')
const constants = require('./constants')

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module = {
            ...config.module,
            ...getModule()
        }

        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                locales: path.resolve(constants.SRC_PATH, 'locales'),
                components: path.resolve(constants.SRC_PATH, 'components'),
                hooks: path.resolve(constants.SRC_PATH, 'hooks'),
                models: path.resolve(constants.SRC_PATH, 'models'),
                providers: path.resolve(constants.SRC_PATH, 'providers'),
                resources: path.resolve(constants.SRC_PATH, 'resources'),
                styles: path.resolve(constants.SRC_PATH, 'styles'),
                ui: path.resolve(constants.SRC_PATH, 'ui'),
                utils: path.resolve(constants.SRC_PATH, 'utils'),
                init: path.resolve(constants.SRC_PATH, 'init')
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.jpg', '.jpeg', '.png', '.svg']
        }


        return config
    },
    addons: ['@storybook/addon-actions/register']
}
