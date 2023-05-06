class Animal {
  //   public  name: string;
  //   public species: string;
  //   public sound: string

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepard", "Dog", " Ghew Ghew");
const cat = new Animal("Village Cat", "cat", "MEW MEW");

cat.makeSound();
