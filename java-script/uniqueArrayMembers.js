/*
Create a function unique(arr) that should return an array with unique items of arr.
*/

function unique (array) {
    let set = new Set(array);
    return set;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  console.log(unique(strings))