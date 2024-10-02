const ul = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")


button.addEventListener("click", function() {
    const inputValue = input.value;
    
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.append(listText);
    listItem.append(listBtn);

    listText.textContent = inputValue;
    listBtn.textContent = 'Delete';

    ul.append(listItem);

    listBtn.addEventListener('click', function () {
        ul.removeChild(listItem);
    });

    input.focus();






});