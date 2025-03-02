import Ship from "./Ship.js";
import{ Destroyer } from "./Ship.js";
import Gameboard from "./Gameboard.js";

const mainBoard = new Gameboard();
const shipDestroyer = new Destroyer();

mainBoard.placeShip(2, 2, 'x', shipDestroyer)
mainBoard.recieveAttack(2, 2)

mainBoard.printBoard()
