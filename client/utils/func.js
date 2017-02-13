import _ from 'lodash';

// create
// msg
// arr, empty array
// start from zero
export function createList(arr=[],start=0) {
  // arr,
  // copy array
  arr = _.cloneDeep(arr);
  
  // push another 20 items there.
  for (var i=start; i<start+20; i++) {
    // push
    arr.push(i)
  }
  
  // return
  return arr;
}

