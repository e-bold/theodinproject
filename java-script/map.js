/*You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name)

console.log(names)

/*
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
*/

let jeff = { name: "Jeff", surname: "Smith", id: 1 };
let pierce = { name: "Pierce", surname: "Hunt", id: 2 };
let molly = { name: "Molly", surname: "Key", id: 3 };

let customers = [jeff, pierce, molly];

let customersMapped = customers.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

console.log(customersMapped)


