const output = document.querySelector(".output")


let mainList = output.querySelector("ul");

mainList.id = 'mainList';

console.log(mainList);

const elements = document.querySelectorAll('div');

for( let i = 0; i< elements.length; i++) {
    console.log(elements[i].tagName)

    elements[i].id = "id" + (i + 1);
    console.log(elements[i].id)
    
    i % 2 ? elements[i].style.color = 'red' : elements[i].style.color = 'blue';
};




