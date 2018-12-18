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
      this.checkWin(this.player1);
      this.currentPlayer = 'p2';
      } else {
      this.player2.push(num);
      this.playedNumbers.push(num);
      this.checkWin(this.player2);
      this.currentPlayer = 'p1';
      }
    }
    updateGameboard();
  },
  checkWin: function(playersArray) {

    const checkAgainst = playersArray.sort().join('');
    console.log(checkAgainst);
    if (
      (/123/.test(checkAgainst)) ||
      (/456/.test(checkAgainst)) ||
      (/789/.test(checkAgainst)) ||
      (/1/.test(checkAgainst) && /4/.test(checkAgainst) && /7/.test(checkAgainst)) ||
      (/2/.test(checkAgainst) && /5/.test(checkAgainst) && /8/.test(checkAgainst)) ||
      (/3/.test(checkAgainst) && /6/.test(checkAgainst) && /9/.test(checkAgainst)) ||
      (/1/.test(checkAgainst) && /5/.test(checkAgainst) && /9/.test(checkAgainst)) ||
      (/3/.test(checkAgainst) && /5/.test(checkAgainst) && /7/.test(checkAgainst))

    ) {
      console.log(`${this.currentPlayer} is the winner`);
    }
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



/*  // this.player one or two contains (win conditions)


  Win conditions
  123
  456
  789
  147
  258
  369
  159
  357
  gameboard.player1.sort().join('')
  .includes('123')
  .includes('456')
  .includes('789')
  .includes('1' && '4' && '7')
  .includes('2' && '5' && '8')
  .includes('3' && '6' && '9')
  .includes('1' && '5' && '9')
  .includes('3' && '5' && '7')

  regex1 = /123/
  regex2 = /456/
  regex3 = /789/
  regex4 = /1.4.7/
  regex5 = /2.5.8/
  regex6 = /3.6.9/
  regex7 = /1.5.9/
  regex8 = /3.5.7/

  checkAgainst.includes('1' && '2' && '3') ||
  checkAgainst.includes('4' && '5' && '6') ||
  checkAgainst.includes('7' && '8' && '9') ||
  checkAgainst.includes('1' && '4' && '7') ||
  checkAgainst.includes('2' && '5' && '8') ||
  checkAgainst.includes('3' && '6' && '9') ||
  checkAgainst.includes('1' && '5' && '9') ||
  checkAgainst.includes('3' && '5' && '7')



(/123/.test(checkAgainst)) ||
(/456/.test(checkAgainst)) ||
(/789/.test(checkAgainst)) ||
(/1/.test(checkAgainst) && /4/.test(checkAgainst) && /7/.test(checkAgainst)) ||
(/2/.test(checkAgainst) && /5/.test(checkAgainst) && /8/.test(checkAgainst)) ||
(/3/.test(checkAgainst) && /6/.test(checkAgainst) && /9/.test(checkAgainst)) ||
(/1/.test(checkAgainst) && /5/.test(checkAgainst) && /9/.test(checkAgainst)) ||
(/3/.test(checkAgainst) && /5/.test(checkAgainst) && /7/.test(checkAgainst))
  */
