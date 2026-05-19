/*Create divs with js to go inside div with ID "container" */
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



