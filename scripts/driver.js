import { Battleship, Carrier, Cruiser, Destroyer } from "./Ship.js";
import Player from "./Player.js";

const player1 = new Player();
const cpu1 = new Player();


player1.playerBoard.printBoard()
console.log('+++++++++++++++++++++++++++++++')
cpu1.playerBoard.printBoard()