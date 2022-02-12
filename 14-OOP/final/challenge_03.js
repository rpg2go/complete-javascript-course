///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}


Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const ElectricVehicle = function(make, speed, battery) {
    Car.call(this, make, speed);
    this.battery = battery;
}

ElectricVehicle.prototype = Object.create(Car.prototype);
ElectricVehicle.prototype.constructor = ElectricVehicle;

ElectricVehicle.prototype.chargeTo = function(chargeTo) {
    this.battery = chargeTo;
}

ElectricVehicle.prototype.accelerate = function() {
    this.speed += 20;
    this.battery--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.battery}%`);
}


const tesla = new ElectricVehicle('Tesla', 120, 90);
console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.accelerate();

console.log(tesla.__proto__); //electric vehicle
console.log(tesla.__proto__.__proto__); // care 
console.log(tesla.__proto__.__proto__.__proto__); //object


console.log(tesla instanceof ElectricVehicle);
console.log(tesla instanceof Car);
console.log(tesla instanceof Object);