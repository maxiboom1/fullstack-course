
abstract class Animal { // 'מתכנת א

    // Data Members
    public name: string;
    public age: number;
    private code: number;

    // Constructor
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.code = Math.floor(Math.random() * 1000000);
    }

    // Methods
    public display(): void {
        document.write("Name: " + this.name + "<br>");
        document.write("Age: " + this.age + "<br>");
        document.write("Code: " + this.code + "<br>");
    }

    public abstract makeSound(): void;

}