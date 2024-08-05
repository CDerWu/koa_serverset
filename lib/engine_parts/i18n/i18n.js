
module.exports = async function (app) {
    const i18next = require('i18next')
    const Backend = require('i18next-sync-fs-backend') // or i18next-node-fs-backend
    const koaI18next = require('koa-i18next')

    i18next.use(Backend);
    i18next.init({
        backend: {
            // translation resources
            loadPath: './locales/{{lng}}/translation.json',
        },
        preload: ['zh-TW', 'en'], // must know what languages to use
        fallbackLng: 'en'
    })

    app.use(koaI18next(i18next, {
        // lookupCookie: 'i18next', // detecting language in cookie
        // lookupPath: 'lng',
        // lookupFromPathIndex: 0, // detecting language in path, like `/api/zh/hello` which `zh` is the language and the index is 1
        // lookupQuerystring: 'lng', // detect language in query,
        // lookupSession: 'lng', // detect language in session
        // order: ['querystring'],
        next: true // if koa is version 2
    }))

    global.getLS = function (ctx, key, option) {
        option = option || {};
        let lng = ctx.session.setLNG;
        if (lng !== '') {
            option.lng = lng;
        }
        return i18next.t(key, option);
    };
}