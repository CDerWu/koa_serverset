import {ADD_AUTHORITY_TYPE} from '@actions';

const authorityType = (state = {}, action) => {
    switch (action.type) {
      case ADD_AUTHORITY_TYPE:
        return  state[action.text]=action.text;
      default:
        return state;
    }
};

export default authorityType;