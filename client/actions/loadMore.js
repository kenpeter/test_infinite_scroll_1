import { MORE_LIST } from "../actions/types";
import { createList } from "../utils/func";

export default function loadMore() {
  return (dispatch, getState) => {
    let state = getState();
    
    setTimeout(() => {
      let list = state.loadMore.list;
    
      const tmpList = createList(list, list.length+1);
      
      // dispatch
      dispatch({
        type: MORE_LIST,
        list: tmpList
      });
      
    }, 2000);
    
  }
}

