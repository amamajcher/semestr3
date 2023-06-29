import { name,userAge } from "./components/new-component";
const zmienna = 6669;
console.log("Hello", zmienna);
console.log(`Halko ${name}, pewnie masz ${userAge} lat`);

//Klasy

class Vehicle {
    constructor(type){
        this.type = type;
    }
    getType(){
        return this.type;
    }
}

class Car extends Vehicle {
    numberOfWheels = 4;
    constructor(type, name){
        super(type);
        this.name = name;
    }
    showInfo(){
        console.log(`I am a ${this.getType()}, my name is ${this.name} and i have ${this.numberOfWheels} wheels.`)
    }
}

const myCar = new Car("car", "Ford");
myCar.showInfo();