const container = document.querySelector("#container");
const body = document.querySelector("body");

//Creating div element
const content = document.createElement("div");
//Assigning a "content" class to the div
content.classList.add("content");

content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//Creating red <p>
const p = document.createElement("p");
p.classList.add("red")
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);


//Creating blue <h3>

const h3 = document.createElement("h3");
h3.classList.add("h3");

h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';

container.appendChild(h3);

//Creating another div with black border and pink background

const blackDiv = document.createElement("div");

blackDiv.style.border = "3px solid black";
blackDiv.style.backgroundColor = "pink";


container.appendChild(blackDiv);




//Creating various elements that is going to nest insted the blackDiv


const title = document.createElement("h1");
title.textContent = "I'm in a div";

const p2 = document.createElement('p');


p2.textContent = "ME TOO!";


blackDiv.append(title, p2);


