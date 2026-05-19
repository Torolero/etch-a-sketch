/*Create divs with js to go inside div with ID "container" */
const body = document.querySelector("body");
const  button = document.createElement("button");
body.prepend(button);
button.textContent = "Click Me!!";
button.classList.add("buttonStyling");
button.addEventListener('mouseenter', (event) => {
    button.classList.add("hoverButton");

    button.addEventListener('mouseleave', (event) => {
        button.classList.remove("hoverButton");
    });
});

button.addEventListener('click', (event) => {
    let userInput = prompt("Enter a number");
});



const containerDiv = document.getElementById("container");

for (let i = 0; i < 16; i++) {
const row = document.createElement("div");
containerDiv.appendChild(row);
row.classList.add("row");

for (let i = 0; i < 16; i++) {

const column = document.createElement("div");
row.appendChild(column);
column.classList.add("column");
column.textContent = "column";

column.addEventListener('mouseenter', (event) => {
    column.classList.add("hoverColumn");
    
    column.addEventListener('mouseleave', (event) => {
        column.classList.remove("hoverColumn");
    });
});
}
}



