var combine = function(n, k) {
  let result = []
  let traverse = (arr, depth) =>{
    if (arr.length === k) {
      result.push(arr)
      return
    }
    if (depth > n) {return}
    traverse(arr, depth + 1)
    traverse(arr.concat(depth), depth + 1)
  }
  traverse([], 1)
  return result;
};