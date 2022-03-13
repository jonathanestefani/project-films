const PROXY_CONFIG = {
    "backend-java/api/*": {
        "target": "https://tools.texoit.com/",
        "changeOrigin": true,
        "secure": false,
        "logLevel": "debug",
        "headers": {
            "Connection": "keep-alive"
        }
    }
}

module.exports = PROXY_CONFIG;