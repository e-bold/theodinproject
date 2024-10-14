/*
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function getAverageAge (users) {
    let count = 0;
    users.forEach(element => {
        count += element.age;
    });

    return Math.round(count/users.length);
}

function getAverageAge2 (users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge2(users));