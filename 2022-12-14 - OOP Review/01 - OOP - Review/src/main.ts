// 'מתכנת ב
// const myAnimal1 = new Animal("Mitsi", 4); // Error

// Without using polymorphism ability:
if (Math.random() < 0.5) {
    const cat1: Cat = new Cat("Hetzel", 5, "Mice");
    cat1.display();
    document.write("Current age: " + cat1.age + "<br>");
    document.write("Next year age: " + (cat1.age + 1) + "<br>");
    document.write("The food is: " + cat1.food + "<br>");
}
else {
    const dog1: Dog = new Dog("Mookie", 3, "Black");
    dog1.display();
    document.write("Current age: " + dog1.age + "<br>");
    document.write("Next year age: " + (dog1.age + 1) + "<br>");
    document.write("The color is: " + dog1.color + "<br>");
}

document.write("<hr>");

// With the polymorphism ability:
let myAnimal: Animal;
myAnimal = (Math.random() < 0.5) ? new Cat("Hetzel", 5, "Mice") : new Dog("Mookie", 3, "Black");
myAnimal.display();
document.write("Current age: " + myAnimal.age + "<br>");
document.write("Next year age: " + (myAnimal.age + 1) + "<br>");
if (myAnimal instanceof Cat) {
    document.write("The food is: " + (myAnimal as Cat).food + "<br>");
    document.write("The food is: " + myAnimal.food + "<br>"); // From some TypeScript version we don't need down cast when we're inside if statement
}
myAnimal.makeSound();


// // ------------------------------------------

// // First:
// let num1: number;
// num1 = 100;

// // Second:
// let num2: number = 100;

// // Third:
// let num3 = 100;


// // ---------------------------------------------

// // First:
// let kitten1: Cat; // Reference
// kitten1 = new Cat("Kitsi", 3, "Ketly"); // Object

// // Second:
// let kitten2: Cat = new Cat("Kitsi", 3, "Ketly");

// // Third:
// let kitten3 = new Cat("Kitsi", 3, "Ketly");


