function equalNeighbors(matrix) {
    let equalPairs = 0;
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        let currentElement = matrix[row][col];
  
        
        if (col < matrix[row].length - 1 && currentElement === matrix[row][col + 1]) {
          equalPairs++;
        }
  
        
        if (row < matrix.length - 1 && currentElement === matrix[row + 1][col]) {
          equalPairs++;
        }
      }
    }
  
    console.log(equalPairs);
  }
  equalNeighbors([['2', '3', '4', '7', '0'],
   ['4', '0', '5', '3', '4'], 
   ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
// equalNeighbors([['test', 'yo', 'yo', 'ho'],
//  ['well', 'done', 'no', '6'],
//  ['not', 'done', 'yet', '5']]);