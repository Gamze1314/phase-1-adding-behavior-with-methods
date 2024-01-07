class Cat{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    
    speak() {
        return `${this.name} says meow!`

    }
}
  class Dog {
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }

    speak() {
        return `${this.name} says woof!`

    }
  }
  
  class Bird {
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }

    speak() {
        if(this.sex === male) { 
            return `It\'s me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
        }

    }
  

let newDog = new Dog('Pablo', 'male')
let dog2 = new Dog("Rufio", "male")
let newCat = new Cat("Sasha", "female")
let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")