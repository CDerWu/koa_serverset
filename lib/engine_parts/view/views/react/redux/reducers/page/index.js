
import { SET_PAGE } from '@actions';

export const page = (state = { name:'',data:{}}, action) => {
    switch (action.type) {
      case SET_PAGE:
        return {
          name:action.name,
          data:action.data
        };
      default:
        return state;
    }
};