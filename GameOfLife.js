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
 for(var j=0; j<width; j++){
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

livingNeighbors(row,col) {
  var board = this.board
  var height=this.height
  var width=this.width
  var i = row
  var j = col

  var count = 0
    if(((i-1)<0 ||(i+1)>height-1|| (j-1)<0 &&(j+1)>width-1 )){
      // console.log(true)
      if((i-1)<0&&(j-1)<0){
        // console.log("left upper corner")
            if(board[i][j+1]===1){
      count++
      // console.log(board[i][j+1],"right")
            }
            if(board[i+1][j+1]===1){
      count++
      // console.log(board[i+1][j+1],"down right")
            }
                if(board[i+1][j]===1){
      count++
      // console.log(board[i+1][j],"down")
    }


      }
      if((i-1)<0&&(j+1)>width-1){
        // console.log("right up corner")
            if(board[i+1][j]===1){
      count++
      // console.log(board[i+1][j],"down")
    }
    if(board[i][j-1]===1){
      count++
      // console.log(board[i][j-1],"left")
    }
    if(board[i+1][j-1]===1){
      count++
      // console.log(board[i+1][j-1],"down left")
    }

      }
      if((i+1)>height-1&&(j-1)<0){
        // console.log("left down corner")
            if(board[i][j+1]===1){
      count++
      // console.log(board[i][j+1],"right")
    }
      // count++ 
    if(board[i-1][j]===1){
      count++
      // console.log(board[i-1][j],"up")
    }

    if(board[i-1][j+1]===1){
      count++
      // console.log(board[i-1][j+1],"up right")
    }

      }
      if((j+1)>width-1&&(i+1)>height-1){
        // console.log("right down corner")
            if(board[i-1][j]===1){
      count++
      // console.log(board[i-1][j],"up")
    }

    if(board[i][j-1]===1){
      count++
      // console.log(board[i][j-1],"left")
    }
    if(board[i-1][j-1]===1){
      count++
      // console.log(board[i-1][j-1],"up left")
    }


      }





      //only one side is less than 0
      if((i-1)<0&&(j-1)>=0 && (j+1)<=width-1){
        // console.log("only up is invalid")
        if(board[i][j+1]===1){
      count++
      // console.log(board[i][j+1],"right")
    }
      // count++ 

    if(board[i][j-1]===1){
      count++
      // console.log(board[i][j-1],"left")
    }
    if(board[i+1][j]===1){
      count++
      // console.log(board[i+1][j],"down")
    }
    if(board[i+1][j-1]===1){
      count++
      // console.log(board[i+1][j-1],"down left")
    }

    if(board[i+1][j+1]===1){
      count++
      // console.log(board[i+1][j+1],"down right")
    }
      }



      if((i+1)>height-1&&(j-1)>=0 && (j+1)<=width-1){
        // console.log("only down is invalid")
        if(board[i-1][j]===1){
      count++
      // console.log(board[i-1][j],"up")
    }
    if(board[i-1][j-1]===1){
      count++
      // console.log(board[i-1][j-1],"up left")
    }
    if(board[i-1][j+1]===1){
      count++
      // console.log(board[i-1][j+1],"up right")
    }
    if(board[i][j+1]===1){
      count++
      // console.log(board[i][j+1],"right")
    }
      // count++ 

    if(board[i][j-1]===1){
      count++
      // console.log(board[i][j-1],"left")
    }
      }
      // if((i-1)<0&&(i+1)>height-1 && (j-1)<0){
      //   console.log("only left is invalid")
      // }
      // if((i-1)<0&&(i+1)>height-1&& (j+1)>width-1){
      //   console.log("only right is invalid")
      // }

      







    }







    else if(!((i-1)<0 ||(i+1)>height-1|| (j-1)<0 &&(j+1)>width-1 )){
      // console.log("all sides valid")
    if(board[i-1][j]===1){
      count++
      // console.log(board[i-1][j],"up")
    }
    if(board[i-1][j-1]===1){
      count++
      // console.log(board[i-1][j-1],"up left")
    }
    if(board[i-1][j+1]===1){
      count++
      // console.log(board[i-1][j+1],"up right")
    }
    if(board[i][j+1]===1){
      count++
      // console.log(board[i][j+1],"right")
    }
      // count++ 

    if(board[i][j-1]===1){
      count++
      // console.log(board[i][j-1],"left")
    }
    if(board[i+1][j]===1){
      count++
      // console.log(board[i+1][j],"down")
    }
    if(board[i+1][j-1]===1){
      count++
      // console.log(board[i+1][j-1],"down left")
    }

    if(board[i+1][j+1]===1){
      count++
      // console.log(board[i+1][j+1],"down right")
    }

    }
    // console.log("this is the count for each cell",count)
    return count
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
        var neighbors = this.livingNeighbors(i,j)
        if(board[i][j]===1){
          if(neighbors<2||neighbors>3){
            newBoard[i][j]=0

          }
          else if(neighbors===2||neighbors===3){
            newBoard[i][j]=1
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

//manual test code
// cont game = new GameOfLife(3,3);
// game.board[1][0]=1
// game.board[1][1]=1
// game.board[1][2]=1
// console.log(game.board)
// game.tick()
// console.log(game.board)