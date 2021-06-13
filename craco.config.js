const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, "src/components/"),
            '@containers': path.resolve(__dirname, "src/containers/"),
            '@css': path.resolve(__dirname, "src/css/"),
            '@data': path.resolve(__dirname, "src/data/"),
            '@functions': path.resolve(__dirname, "src/functions/")
        }
    }
}
