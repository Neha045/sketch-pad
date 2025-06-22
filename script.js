function createGrid(size) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    container.append(div);
  }
  const divs = document.querySelectorAll("#container > div");
  const gridSize = 600;
  divs.forEach((div) => {
    for (let i = 0; i < size; i++) {
      const cell = div.appendChild(document.createElement("div"));
      const cellSize = gridSize/size;
      cell.style.width = cellSize + 'px';
      cell.style.height = cellSize + 'px';
    }
  });

  const div = document.querySelectorAll("#container > div > div");
  let isHovered = false;
  div.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      isHovered = true;
      div.classList.add("hovered");
    });
  });
}

// Buttons
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("grid-size").addEventListener("click", openPopup);

function displayInputValue() {
  const inputElement = document.getElementById("gridSize");
  const inputValue = inputElement.value;
  createGrid(inputValue);
  closePopup()
}

function reset() {
  createGrid(16);
}

createGrid(16);
