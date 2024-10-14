/*
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
*/

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];


function groupById (array) {

    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
      }, {})
}

console.log(groupById(users))