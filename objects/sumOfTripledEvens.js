//Practice of .filter .map and .reduce methods in javascript


let array = [1, 2, 3, 4, 5, 6];

//Apply .filter method to find even numbers from the array
let filterArr = array.filter(n => (n % 2 === 0));
console.log(filterArr)

//Apply .map to multiple each number by 3
let mapArray = filterArr.map(m => (m *3));
console.log(mapArray);

//Apply .reduce method to find the sum
let reduceArray = mapArray.reduce((total, current) =>  total + current);
console.log(reduceArray);


//Function that combines all three methods on the array
function sumOfTripledEvens(array) {
    return array
    .filter(num => num % 2 === 0)
    .map(num => num * 3)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTripledEvens(array));