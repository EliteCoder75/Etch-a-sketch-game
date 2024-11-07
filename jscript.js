



const grid = document.querySelector('.grid');
// Use a nested for loop to create the grid cells
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }
}


// hover over function
const cell = document.querySelectorAll(".cell")

cell.forEach(function(myBox) {
  //const color = window.getComputedStyle(myBox).getPropertyValue('background-color'); //grabs the css background color
  myBox.addEventListener('mouseover', (e) => { 
    e.target.style.backgroundColor = 'black';
});
});