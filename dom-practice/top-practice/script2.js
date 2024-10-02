//Method 1. Inline inside the HTML
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }


//Method 2 
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World");

//Method 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {alert("Hello World!")})


const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      alert(button.id);
    });
  });