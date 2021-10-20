/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    pwa: {
        name: "Young Persons Guarantee",
        short_name: "YPG",
        themeColor: "#f7c01a",
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true
        }
    }
}