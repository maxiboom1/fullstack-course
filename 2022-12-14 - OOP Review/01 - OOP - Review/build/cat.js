class Cat extends Animal {
    // Override
    constructor(name, age, food) {
        super(name, age);
        this.food = food;
    }
    // Override
    display() {
        super.display();
        document.write("Food: " + this.food + "<br>");
    }
    // Override
    makeSound() {
        document.write("Meow...<br>");
    }
}
