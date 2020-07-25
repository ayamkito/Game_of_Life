class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard(height,width) {
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
height=this.height
width = this.width
var arr = new Array
for(var i=0; i<height; i++){
  arr[i]=new Array
 for(var j=0; j<this.width; j++){
  arr[i][j]=0
 }
}
console.log("line 30",arr)
return arr

}
                                          //
// getCell(row,col){
//   var board = this.board
//   var cell = board[row][col]
//   console.log(cell)
//   return cell

// }

// setCell(val,row,col){
//   var board = this.board
//   board[row][col]=val
//   return val
// }

// toggleCell(row,col){
//   var board = this.board
//   var dead = 0
//   var alive =1
//   if(board[row][col]===dead){
//     board[row][col] = alive
//   }else{
//     board[row][col] = dead
//   }
//   console.log("line 58",board)
// }
// /**
//  * Return the amount of living neighbors around a given coordinate.
//  */
// // console.log("living neigbors", arr[0][0])

livingNeighbors(row, col) {
  row = this.height
  col = this.width
  var board = this.board
  // TODO: Return the count of living neighbors.
  for(var i=0; i<row; i++){
    for(var j=0; j<col; j++){
      var count = 0
      console.log(board[i][j])
       //up neighbor = row-1,col
      if(board[i][j-1]===1){
       count++
      }
       // //down neighbor = row+1, col
      if(board[i][j+1]===1){
       count++
      }
       // //left neighbor =row,col-1
      if(board[row-1][col]===1){
       count++
      }
       // //right neighbor
      if(board[row+1][col]===1){
         count++
      }
       //left up
      if(board[row-1][col-1]===1){
           count++
      } 
       //right up
      if(board[row+1][col-1]===1){
       count++
      }
       //left down
      if(board[row-1][col+1]===1){
       count++
      }
       //right down
      if(board[row+1][col+1]===1){
       count++
      }
       console.log("line 109", count)
       //console.log( "live neigbors", count)
       // return count 
    }
  }

}
                                          //
                                         
  /*
    Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();

    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors


    var board=this.board
    for(var i=0; i<this.height; i++){
      for(var j=0; j<this.width; j++){
        var neighbors = this.livingNeighbors(i, j)
        if(board[i][j]===1){
          if(neighbors<2||neighbors>3){
            newBoard[i][j]=0

          }
          else{
            mewBoard[i][j]=1
          }
        }
        if(board[i][j]===0){
          if(neighbors===3){
            newBoard[i][j]=1
          }
        }
        
      }
    }
    this.board = newBoard;
  }
}


// cont game = new GameOfLife(3,3);
// game.board[1][0]=1
// game.board[1][1]=1
// game.board[1][2]=1
// console.log(game.board)
// game.tick()
// console.log(game.board)