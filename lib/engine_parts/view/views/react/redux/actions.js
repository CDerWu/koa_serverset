/*
* action type
*/
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const LOCALE_SELECTED = 'LOCALE_SELECTED'; //language change


/*
* other const
*/
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_DELETED: 'SHOW_DELETED'
}


let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const selectedLocale = (locale) => {
    return {
        type: LOCALE_SELECTED,
        locale
    }
}

export const ADD_AUTHORITY_TYPE = 'ADD_AUTHORITY_TYPE';
export const SET_USER_AUTHORITY = 'SET_USER_AUTHORITY';
export const RESET_USER_AUTHORITY ='RESET_USER_AUTHORITY';


export const addAuthorityType = text => ({
  type: ADD_AUTHORITY_TYPE,
  text
});

export const setUserAuthority = text => ({
  type: SET_USER_AUTHORITY,
  text
});

export const ResetUserAuthority = (text) => ({
  type: RESET_USER_AUTHORITY,
  text
});

export const SET_PAGE = 'SET_PAGE';
export const setPage = (name,data={}) => ({
  type: SET_PAGE,
  name,
  data
});