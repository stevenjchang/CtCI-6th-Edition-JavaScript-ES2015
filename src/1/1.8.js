// Zero Matrix

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

function zeroMatrix(matrix) {
  if (!matrix) {
    throw error;
  }
  // let copy = matrix.slice();
  let copy = Array.prototype.slice.call(matrix);
  for (let i = 0; i < matrix.length; i++) {
    // console.log('matrix =>', matrix);
    // console.log('copy__ =>', copy);
    
    for (let j = 0; j < matrix[i].length; j++) {
      let curr = matrix[i][j];
      // console.log('curr === 0', curr === 0, 'curr:', curr)
      if (curr === 0) {
        // console.log('******** =>');
        // console.log('copy =>', copy, 'matrix =>', matrix);
        
        
        for (let k = 0; k < copy.length; k++) {
          // console.log('first loop')
          // console.log('i =>', i, 'j =>', j, 'k =>', k);
          console.log('matrix before =>', matrix);
          
          copy[k][j] = 0;

          console.log('matrix after_ =>', matrix);
          console.log('*****  =>', );
          
          
        }
        for (let m = 0; m < copy[i].length; m++) {
          // console.log('second loop')
          // console.log('i =>',i,'j =>',j,'***** m =>',m);
          copy[i][m] = 0;
        }

        // setXandYtoZero(matrix, i, j);
        // setXtoZero(matrix, i, j);
        // setYtoZero(matrix, i, j);
        
      }
    }
  }
  console.log('result =>', copy)
  return copy
}
// const setXandYtoZero = (copy, i, j) => {
//   let innerCopy = copy.slice()
//     setXtoZero(copy, i, j);
//     setYtoZero(copy, i, j);
//     // console.log('innercopy =>', innerCopy);
//   return innerCopy;
// } 
// const setXtoZero = (copy, i, j) => {
//   console.log('888888 copy', copy, '888888 marix', matrix);
//   // console.log('copy', copy, 'i =>', i, 'j =>', j, 'copy[i].length =>', copy[i].length)
//   for (let k = 0; k < copy[i].length; k++) {
//     // console.log('1 inner copy i k =>', copy[i][k])
//     copy[i][k] = 0;
//     // console.log('2 inner copy i k =>', copy[i][k])
//     // console.log('inner copy =>', copy)
//   }
// }

// const setYtoZero = (copy, i, j) => {
//   // console.log('incoming copy', copy);
//   for (let k = 0; k < copy.length; k++) {
//     copy[k][j] = 0;
//     // console.log('copy *********', copy)
//   }
// }

const matrix = 
[
  [1, 0, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// const matrix = [[1,2],[0,4]];

zeroMatrix(matrix)

/*
make a copy of matrix
iterate over original matrix
  if curr === 0
    run func set x to zero
    run func set y to zero
return copy
*/
