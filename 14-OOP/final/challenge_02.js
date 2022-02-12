// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelarate() {
        this.speed += 10;
        console.log(`${this.make} is accelerating at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is breaking at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

const ford = new Car('Ford', 80);

console.log(bmw);
bmw.accelarate();
bmw.brake();
bmw.brake();
bmw.accelarate();
bmw.brake();

console.log('\n');
console.log(mercedes);
mercedes.accelarate();
mercedes.brake();
mercedes.brake();
mercedes.brake();

console.log('\n');
console.log(ford);
ford.accelarate();
ford.brake();
ford.brake();

console.log(ford);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);