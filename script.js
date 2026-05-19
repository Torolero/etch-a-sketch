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
    grid(userInput);
});

const containerDiv = document.getElementById("container");

function grid(input) {
    containerDiv.replaceChildren();

    if (input >= 100) {
        alert("Enter a number under 100!!!");
    } else{
        for (let i = 0; i < input; i++) {
            const row = document.createElement("div");
            containerDiv.appendChild(row);
            row.classList.add("row");

            for (let i = 0; i < input; i++) {

            const column = document.createElement("div");
            row.appendChild(column);
            column.classList.add("column");


            column.addEventListener('mouseenter', (event) => {
                column.classList.add("hoverColumn");
                
                column.addEventListener('mouseleave', (event) => {
                    column.classList.remove("hoverColumn");
                });
            });
            }
        }
    }
}


