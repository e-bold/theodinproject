const ele1 = document.querySelector(".output")
ele1.textContent = "Hello";
ele1.classList.add('red')
ele1.id = "tester";
console.log(ele1.outerHTML)

const pageElement = document.body;

pageElement.style.backgroundColor = 'red';

let pageUrl = document.URL;

console.log(pageUrl);

ele1.textContent = pageUrl;