class Cat extends Animal {

    public food: string;

    // Override
    public constructor(name: string, age: number, food: string) {
        super(name, age);
        this.food = food;
    }

    // Override
    public display(): void {
        super.display();
        document.write("Food: " + this.food + "<br>");
    }

    // Override
    public makeSound(): void {
        document.write("Meow...<br>");
    }

}