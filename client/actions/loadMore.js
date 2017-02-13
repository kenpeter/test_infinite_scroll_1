// action type
import { MORE_LIST } from "../actions/types";

// create list
import { createList } from "../utils/func";

export default function loadMore() {
  return (dispatch, getState) => {
    // get current data
    let state = getState();
    
    // get it
    let list = state.loadMore.list;
  
    // create data and merge
    const tmpList = createList(list, list.length+1);
    
    // fire
    dispatch({
      type: MORE_LIST,
      list: tmpList
    });
    
    
  }
}

