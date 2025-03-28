const mainContent = document.querySelector("#container");
const userInput = prompt("How many boxes?");

function drawBox(userInput) {
    for (i = 0; i < userInput; i++){
        const rowBox = document.createElement("div");
        rowBox.classList.add("boxes");
        mainContent.appendChild(rowBox);
            for (j = 0; j < userInput; j++){
                const colBox = document.createElement("div");
                colBox.classList.add("boxes2");
                rowBox.appendChild(colBox);
            }
    }
};

drawBox(userInput);

const box = document.querySelector("div");

box.onmouseover