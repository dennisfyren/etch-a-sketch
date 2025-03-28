const mainContent = document.querySelector("#container");
const userInput = prompt("How many boxes? (max 70)");

function drawBox(userInput) {
    if (userInput > 70) {
        alert("Too many, try less");
        window.location.reload();
    } else  {
    
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
}};

drawBox(userInput);

const hoverBox = document.querySelectorAll(".boxes2");
hoverBox.forEach((hoverBox) => {
    hoverBox.addEventListener("mouseenter", () => {
        hoverBox.classList.add("boxes-hover");
        
    })
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    window.location.reload();
});


btn.addEventListener("mouseenter", () => {
    btn.classList.add("button-hover");
})

btn.addEventListener("mouseleave", () => {
    btn.classList.remove("button-hover");
})