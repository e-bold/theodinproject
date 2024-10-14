let arr = [5, 2, 1, -10, 8];

function sortArr (arr) {
    return arr
        .sort((a, b) => b- a)
}

console.log(sortArr(arr))


//Copy and sort array
let arr2 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr2)

console.log(arr2); // HTML, JavaScript, CSS (no changes)
console.log(sorted); // CSS, HTML, JavaScript