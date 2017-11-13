// need current player
// need reference to 'x & 'o'
// this is matrix
// 

const box = $('.one-box');
let currentPlayer = true;

let players = {
  true: 'player1',
  false: 'player2'
};

let grid = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
}

const values = {
  player1: 'X',
  player2: 'O'
};

let possibilities = [['123', '146', '159', '258', '369', '357', '456', '789']];

box.on('click', function (e) {
  let box = e.target.classList[2];
  if (!e.target.innerText) {
    this.innerText = values[players[currentPlayer + '']];
    grid[box] = values[players[currentPlayer + '']];
    currentPlayer = !currentPlayer;
  } else {
    alert('This box has been marked');
  }
});




