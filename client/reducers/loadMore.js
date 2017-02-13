import { MORE_LIST } from "../actions/types";
import { createList } from "../utils/func"; 

const initState = {
  list: createList([], 0)
};

// able to fire
export default function list(state = initState, action = {}) {
  switch(action.type) {
  
    case MORE_LIST:
      return {
        list: action.list,
      }

    default:
      return state;
  }
}



