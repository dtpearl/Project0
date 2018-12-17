const gameboard = {
  player1: [],
  player2: [],
  playedNumbers: [],
  currentPlayer: 'p1',
  takeTurn: function (num) {
    if ( !this.playedNumbers.includes(num) ){
      if (gameboard.currentPlayer === 'p1') {
      this.player1.push(num);
      this.playedNumbers.push(num);
      this.currentPlayer = 'p2';
      this.checkWin();
      } else {
      this.player2.push(num);
      this.playedNumbers.push(num);
      this.currentPlayer = 'p1';
      this.checkWin();
      }
    }
    updateGameboard();
  },
  checkWin: function() {
    // this.player one or two contains (win conditions)

    /*
    Win conditions
    123
    456
    789
    147
    258
    369
    159
    357

    */
  }

}


const clickSquare = function (num) {
  if (gameboard.currentPlayer === 'p1') {
  gameboard.player1.push(num);
  gameboard.currentPlayer = 'p2';
  gameboard.checkWin();
} else {
  gameboard.player2.push(num);
  gameboard.currentPlayer = 'p1';
  gameboard.checkWin();
}
};

const updateGameboard = function () {
  for (let i = 0; i < gameboard.player1.length; i++) {
    $(`#sq${gameboard.player1[i]}`).html('X');
  }
  for (let j = 0; j < gameboard.player2.length; j++) {
    $(`#sq${gameboard.player2[j]}`).html('O');
  }
};

$(document).ready(function(){

$('.squares').on('click', function(){
  const squareClicked = +$(this).attr('id').slice(2);
  console.log(squareClicked);
  gameboard.takeTurn(squareClicked);
  // const number = Number(squareClicked.slice(2));
  // clickSquare(number);
  // console.log(number);
});

});
