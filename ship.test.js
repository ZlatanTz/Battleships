import Ship from './Ship.js'
import {Destroyer} from './Ship.js';  

test('sunk logic', () => {

    const ship =  new Destroyer();

    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true);
});