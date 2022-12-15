class Dog extends Animal {

    public color: string;

    // Constructor: 
    public constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }

    // Display: 
    public display(): void {
        super.display();
        document.write("Color: " + this.color + "<br>");
    }

    public makeSound(): void {
        document.write("How how...<br>");
    }

}