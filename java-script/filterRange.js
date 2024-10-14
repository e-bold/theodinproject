function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b) 
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(arr); // 5,3,8,1 (not modified)

console.log(filtered); // 3,1 (matching values)


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
    
        // remove if outside of the interval
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }
    
}

filterRangeInPlace(arr, 1, 4)
console.log(arr)