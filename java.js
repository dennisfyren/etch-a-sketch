const mainContent = document.querySelector("#mainContent");
const content = document.createElement("div");

const numRows = prompt("How many rows would you like?")



function drawBox(numRows) {
    for (i = 0; i < numRows; i++) {
    content.classList.add("content")
    mainContent.appendChild(content);
    console.log(i);
    };
};

function drawColumns(numRows) {
    for (i = 0; i < numRows; i++) {
        const column = document.createElement("div");
        column.classList.add("sketchBoxCol");
        content.appendChild(column);
    }
};

function drawRows(numRows) {
    for (i = 0; i < numRows; i++) {
        const sketchBox = document.createElement("div");
        sketchBox.classList.add("sketchBox");
        mainContent.appendChild(sketchBox);
    }};
        

drawBox(numRows);
drawColumns(numRows);
drawRows(numRows);

