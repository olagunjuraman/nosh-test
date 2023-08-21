const generatePascalTriangle = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    let currentRow = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currentRow.push(1);
      } else {
        currentRow.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(currentRow);
    console.log(currentRow.join(" "));
  }
};

generatePascalTriangle(3);
