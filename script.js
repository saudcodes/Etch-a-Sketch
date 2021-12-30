var container = document.getElementById("container");
let gridNumber = 8;



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
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", function (event) {
        // highlight the mouseover target
        this.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 50%)`

    }));
}


grid() = true;
