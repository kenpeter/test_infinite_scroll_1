import _ from 'lodash';
import axios from "axios";

// clone the array
export function createList(arr=[],start=0) {
  let apiUrl = "http://www.mangaeden.com/api/list/0?p=0";
  
  return axios.get(apiUrl).then((obj) => {
    let arr = obj.data.manga; // array of obj
    
    //console.log("--- start ---");
    //console.log(arr);  
      
    return arr;        
  });


  // This works
  /*
  const myLen = 500;

  // clone array
  // later we push element
  arr = _.cloneDeep(arr);
  
  // push another 20 items there.
  for (var i=start; i < start + myLen; i++) {
    // push
    arr.push(i)
  }
  
  // return
  return arr;
  */
  
}

