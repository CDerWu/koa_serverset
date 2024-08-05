import {SET_USER_AUTHORITY,RESET_USER_AUTHORITY} from '@actions';

const authority = (state = [], action) => {
    switch (action.type) {
      case SET_USER_AUTHORITY:
        return [...state,action.text];
      case RESET_USER_AUTHORITY:
        return [];
      default:
        return state;
    }
};

export default authority;