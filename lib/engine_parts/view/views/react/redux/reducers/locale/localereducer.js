import { LOCALE_SELECTED } from '@actions';
import { enUS_TRANSLATION, zhTW_TRANSLATION, zhCN_TRANSLATION } from '@components/utils/react_intl';

const initialState = {
    lang: zhTW_TRANSLATION.lang,
    messages: zhTW_TRANSLATION.messages
};

export const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCALE_SELECTED:
            switch (action.locale) {
                case 'en-US':
                    return { ...initialState, lang: enUS_TRANSLATION.lang, messages: enUS_TRANSLATION.messages };
                case 'zh-TW':
                    return { ...initialState, lang: zhTW_TRANSLATION.lang, messages: zhTW_TRANSLATION.messages };
                case 'zh-CN':
                    return { ...initialState, lang: zhCN_TRANSLATION.lang, messages: zhCN_TRANSLATION.messages };
            }
        default:
            return state;
    }
};
