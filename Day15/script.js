// Base class: Animal
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    // Method to display information
    info() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }
  
    // Method for sound (to be overridden in child classes)
    makeSound() {
      console.log("This animal makes a sound.");
    }
  
    // Method for movement (to be overridden in child classes)
    move() {
      console.log(`${this.name} moves in a unique way.`);
    }
  }
  
  // Dog class, inheriting from Animal
  class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    // Overriding the makeSound method
    makeSound() {
      console.log(`${this.name} barks!`);
    }
  
    // Overriding the move method
    move() {
      console.log(`${this.name} runs quickly on ${this.legs} legs.`);
    }
  }
  
  // Cat class, inheriting from Animal
  class Cat extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    // Overriding the makeSound method
    makeSound() {
      console.log(`${this.name} meows!`);
    }
  
    // Overriding the move method
    move() {
      console.log(`${this.name} walks gracefully on ${this.legs} legs.`);
    }
  }
  
  
  const dog = new Dog("Rex", 5, "brown", 4, "Labrador");
  dog.info();        
  dog.makeSound();   
  dog.move();        
  

  const cat = new Cat("Garfield", 10, "orange", 4);
  cat.info();        
  cat.makeSound();   
  cat.move();        


  class Statistics {
    constructor(sample){
    this.sample = sample;
    }

    mean() {
      const sum =this.sample.reduce((acc, value) => value, 0);
      return sum / this.sample.length;
    }

    median() {
      const sorted = [this.sample].sort((a,b)=> a-b);
      const middle =Math.floor(sorted.length/2);

      if(sorted.length%2 === 0){
        return (sorted[middle-1] + sorted[middle]) /2;
      }else{
        return sorted[middle];
      }
    }

    mode(){
      const freq ={};
      this.sample.forEach(value => {
        freq[value] =(freq[value] || 0) + 1
      });

      const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[key] === maxFreq);

    return modes.length === 1 ? Number(modes[0]) : modes.map(Number);
    }
  }
  

  