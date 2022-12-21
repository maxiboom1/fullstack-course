class Dog extends Animal {
    // Constructor: 
    constructor(name, age, color) {
        super(name, age);
        // --------------------------
        this.volumeLevel = 9;
        this.color = color;
    }
    // Display: 
    display() {
        super.display();
        document.write("Color: " + this.color + "<br>");
    }
    makeSound() {
        document.write("How how...<br>");
    }
    attack() {
        document.write('Dog is attacking..');
    }
    warn() {
        document.write('Dog is warning..');
    }
}
