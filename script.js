var container = document.getElementById("container");
let gridNumber = 100;

function grid() {
    let gridArea = gridNumber * gridNumber;

    for (let i = 0; i < gridArea; i++) {
        let cell = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        cell.innerHTML = "";
        container.appendChild(cell);
    }
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", function (event) {
        // highlight the mouseover target
        event.target.style.backgroundColor = "orange";

    }));
}
grid() = true;
