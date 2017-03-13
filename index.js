const readline = require('readline');

  // var prompt = require('prompt');

  // //
  // // Start the prompt
  // //
  // prompt.start();

  // //
  // // Get two properties from the user: username and email
  // //
  // prompt.get( ['\r\n _ _ _\r\n|_|_|_|\r\n|_|_|_|\r\n|_|_|_|\r\n'], function (err, result) {
  //   //console.log('14', result.stuff);
  //   //
  //   // Log the results.
  //   console.log('17', result)
  //   // console.log('Command-line input received:');
  //   // console.log('  username: ' + result.username);
  //   // console.log('  email: ' + result.email);
  //   //console.log(['\r\n _ _ _\r\n|_|_|_|\r\n|_|_|_|\r\n|_|_|_|\r\n']);
  // });

var Game = function() {
  this.board = [' _ _ _\r\n|_|_|_|\r\n|_|_|_|\r\n|_|_|_|\r\n'];

}

Game.prototype.play = function() {
  var won = false;
  //console.log('playing');

  // while(won === false) {
  //   console.log(this.board);
  //   won = true;
  //   //reset won to true or false

// const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdout,
  output: process.stdout
});

let playerNum = 1;
playerNum = playerNum = 1 ? 2 : 1;
rl.question(this.board.toString(), (move) => {
  // TODO: Log the answer in a database
  console.log(`Please enter your move Player ${playerNum}: ${move}`);
  //if a player wins
  console.log(Array.isArray(this.board));
  var boardArray = this.board.split(' ');
  console.log('53', boardArray);
  rl.close();
  //else
});

 // rl.on('line', (input) => { console.log('57', input) })


 }



var g = new Game();
g.play();


