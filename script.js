function spotlightMap(grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  const spotlightGrid = [];

  // Iterate through each cell in the grid
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < columns; j++) {
      let sum = grid[i][j]; // Include the current number

      // Calculate the sum of adjacent numbers
      if (i > 0) {
        sum += grid[i - 1][j]; // Top
        if (j > 0) sum += grid[i - 1][j - 1]; // Top-left
        if (j < columns - 1) sum += grid[i - 1][j + 1]; // Top-right
      }
      if (j > 0) sum += grid[i][j - 1]; // Left
      if (j < columns - 1) sum += grid[i][j + 1]; // Right
      if (i < rows - 1) {
        sum += grid[i + 1][j]; // Bottom
        if (j > 0) sum += grid[i + 1][j - 1]; // Bottom-left
        if (j < columns - 1) sum += grid[i + 1][j + 1]; // Bottom-right
      }

      newRow.push(sum);
    }
    spotlightGrid.push(newRow);
  }

  return spotlightGrid;
}

function gridnumbers() {
  const inputArray = document.getElementById("grid-input").value;
  const parsedArray = JSON.parse(inputArray);

  const output = spotlightMap(parsedArray);
  document.getElementById("output").textContent = JSON.stringify(output);
}




