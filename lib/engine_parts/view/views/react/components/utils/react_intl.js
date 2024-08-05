//react-intl v3.x.x, if need
//require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
//require('@formatjs/intl-relativetimeformat/dist/locale-data/zh');

import enUS from '@react/locales/en-US/translation.json';
import zhTW from '@react/locales/zh-TW/translation.json';
import zhCN from '@react/locales/zh-CN/translation.json';


export function getLocale() {
    return navigator.language.split('-')[0];
}

// clang : 'en-US', 'zh-TW','zh-CN'
export function chooseLocale(clang) {
    let lang = enUS;
    let lang_arr = (clang ? clang.split('-') : navigator.language.split('-'));
    switch (lang_arr[0]) {
        case 'en':
            lang = enUS;
            break;
        case 'zh':
            //lang = (lang_arr[1] == 'TW' ? zhTW : enUS);
            lang = (lang_arr[1] == 'TW' ? zhTW : (lang_arr[1] == 'CN' ? zhCN : enUS));
            break;
        default:
            lang = enUS;
            break;
    }

    return lang;
}

export const flattenMessages = ((nestedMessages, prefix = '') => {
    if (nestedMessages === null) {
        return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key]
        const prefixedKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'string') {
            Object.assign(messages, { [prefixedKey]: value })
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }

        return messages
    }, {})
})

export const enUS_TRANSLATION = {
    lang: 'en',
    messages: flattenMessages(enUS)
};

export const zhTW_TRANSLATION = {
    lang: 'zh',
    messages: flattenMessages(zhTW)
};

export const zhCN_TRANSLATION = {
    lang: 'zh',
    messages: flattenMessages(zhCN)
};

if (window.dlLocales) {
    try {
        let lsKeys = window.dlLocales.getLanguageKeys();
        lsKeys.map(languageKey => {
            //console.log('languageKey:' + languageKey);
            let data = window.dlLocales.getLocalesObject(languageKey);
            if (data) {
                let content = flattenMessages(data);
                switch (languageKey) {
                    case 'en-US':
                        enUS_TRANSLATION.messages = Object.assign(enUS_TRANSLATION.messages, content);
                        break;

                    case 'zh-TW':
                        zhTW_TRANSLATION.messages = Object.assign(zhTW_TRANSLATION.messages, content);
                        break;

                    case 'zh-CN':
                        zhCN_TRANSLATION.messages = Object.assign(zhCN_TRANSLATION.messages, content);
                        break;
                }
            }
        })
    }
    catch (error) {
        console.log(`window.dlLocales error = ${error.messages}`);
    }

}


//Example:
//import { getLS } from '@react/js/ls';
//{getLS('test.item_introduction')}
//{getLS('test.test', { desc: 'test language1' })}