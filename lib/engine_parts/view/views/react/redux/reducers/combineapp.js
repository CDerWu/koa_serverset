import { combineReducers } from 'redux';

import todos from './todo/todos';
import visibilityFilter from './todo/visibilityfilter';
export const combineApp = combineReducers({
  todos,
  visibilityFilter
});

//import authority from './authority/authority';
//import authorityType from './authority/authoritytype';
import { localeReducer } from './locale/localereducer';
import { page } from './page';

const defaultReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  locale: localeReducer,
  // lv: authority,
  // SystemAuthorityType: authorityType,
  // user: defaultReducer,
  menuData: defaultReducer,
  page
});