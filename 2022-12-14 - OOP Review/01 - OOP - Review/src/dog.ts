class Dog extends Animal implements Guard {

    public color: Color;

    // Constructor: 
    public constructor(name: string, age: number, color: Color) {
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
    // --------------------------

    public volumeLevel: number = 9;
    public attack(): void{
        document.write('Dog is attacking..');
    }

    public warn(): void{
        document.write('Dog is warning..');
    }

}