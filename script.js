var container = document.getElementById("container");
let gridNumber = prompt("enter number of grids eg: 16,36...");

let playersSelection = "gray";

function colorGen() {
    function randomHsl() {
        return Math.floor(Math.random() * 360);
    }
    let rainbow = `hsl(${randomHsl()}, 100%, 50%)`
    
    let gray = `rgba(108, 91, 100, 0.94)`;

    if (playersSelection = "rainbow") {
        this.style.backgroundColor = rainbow;
     }
     else if (playerselection = "gray") {
         this.style.backgroundColor = gray;
     }

}

function grid() {
    let gridArea = gridNumber * gridNumber;

    for (let i = 0; i < gridArea; i++) {
        let cell = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        cell.innerHTML = "";
        cell.classList.add("cell")
        container.appendChild(cell);
    }
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover",colorGen ));

}




grid() = true;

