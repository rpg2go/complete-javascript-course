/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class ElectricVehicle extends Car {
    #battery;
    static color;

    constructor(make, speed, battery) {
        super(make, speed);
        this.#battery = battery;

        this.color = 'red';

        console.log(
            `${this.make} is an amazing electric ${this.color} car with ${
                this.#battery
            }% charged battery.`
        );
    }

    chargeBattery(chargeTo) {
        this.#battery = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#battery--;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${
                this.#battery
            }%`
        );
        return this;
    }
}

const rivian = new ElectricVehicle('Rivian', 120, 23);
console.log(rivian);

// rivian.accelerate();
// rivian.brake();
// rivian.accelerate();
// rivian.accelerate();
// rivian.brake();
// rivian.brake();
// rivian.accelerate();

rivian
    .accelerate()
    .brake()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(75)
    .brake()
    .brake();

console.log(rivian); //electric vehicle
console.log(rivian.speedUS);

rivian.speedUS = 50;
console.log(rivian.speed);

console.log(rivian); //electric vehicle

console.log(rivian.__proto__); // car
console.log(rivian.__proto__.__proto__); // object

console.log(rivian instanceof ElectricVehicle);
console.log(rivian instanceof Car);
console.log(rivian instanceof Object);
