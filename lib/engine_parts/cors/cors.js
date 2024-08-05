module.exports = async function (app) {
    let cors = require('koa2-cors');
    app.use(cors({
        origin: "*",
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 3600,
        credentials: true,
        allowMethods: ['POST', 'GET', 'DELETE', 'PUT'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept']
    }));
}