let user = {
    name: "John",
    age: 30,
    "likes birds": true,  // multiword property name must be quoted
    userId: "john23", //last property in the list may end with a comma
};


delete user.age;

console.log(user);

user["likes birds"] = false;

console.log(user);


let key = "likes getting up early";

// same as user["likes getting up early"] = true;
user[key] = true;

console.log(user);

//Property existence test, “in” operator
console.log( "age" in user ) // true, user.age exists
console.log( "name" in user ) // true, user.name exists

for (key in user) {
    // executes the body for each key among object properties
    console.log('------\n')
    console.log(key)
    console.log(user[key])
  }



//Reduce method

const arr = [2, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
    console.log("this is total " + total);
    console.log("this is current item " + currentItem);
  return total * currentItem;
}, 3);
console.log(productOfAllNums); // Outputs 120;
console.log(arr);