const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://localhost:27017/food'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|7aef61337bcee2fe773aa78b40afacbc'
    }
}
module.exports = variables;