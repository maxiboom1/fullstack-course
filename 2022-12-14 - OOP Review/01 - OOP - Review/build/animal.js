class Animal {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.code = Math.floor(Math.random() * 1000000);
    }
    // Methods
    display() {
        document.write("Name: " + this.name + "<br>");
        document.write("Age: " + this.age + "<br>");
        document.write("Code: " + this.code + "<br>");
    }
}
