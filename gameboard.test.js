import Gameboard from './Gameboard.js'
import Ship, { Battleship, Carrier, Cruiser, Destroyer} from './Ship.js'


describe('Gameboard class', () => {
    let gameboard;

     beforeEach(() => {
        gameboard = new Gameboard();
    })

    test('should throw error if ship doesn\'t fit horizontally', () => {
        const carrier = new Carrier()
        expect(() => gameboard.placeShip(0, 8, 'x', carrier)).toThrow('Ship does not fit horizontally on the board');
    });

    test('should throw error if ship doesn\'t fit vertically', () => {
        const carrier = new Carrier()
        expect(() => gameboard.placeShip(8, 0, 'y', carrier)).toThrow('Ship does not fit vertically on the board');
    });

    test('should throw error if occupied horizontally', () =>{
        const carrier = new Carrier()
        const destroyer = new Destroyer
        gameboard.placeShip(5, 3, 'y', carrier)
        expect(() => gameboard.placeShip(5, 3, 'x', destroyer)).toThrow('Position already occupied')
    })

    test('invalid orientation', () => {
        const carrier = new Carrier();

        expect(() => gameboard.placeShip(5, 3, 'a', carrier)).toThrow('Invalid orientation')
    })

    test('place ship places horizontally', () =>{
        const carrier = new Carrier();
        let x = 0;
        let y = 0;
        let orientation = 'x'
        gameboard.placeShip(x, y, orientation, carrier)

       for (let i = 0; i < carrier.length; i++) {
           expect(gameboard.board[x][y + i]).toBe(carrier) 
    }
        
    })
})

