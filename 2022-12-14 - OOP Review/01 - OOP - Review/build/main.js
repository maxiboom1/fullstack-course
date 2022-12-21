// // 'מתכנת ב
// // const myAnimal1 = new Animal("Mitsi", 4); // Error
// // Without using polymorphism ability:
// if (Math.random() < 0.5) {
//     const cat1: Cat = new Cat("Hetzel", 5, "Mice");
//     cat1.display();
//     document.write("Current age: " + cat1.age + "<br>");
//     document.write("Next year age: " + (cat1.age + 1) + "<br>");
//     document.write("The food is: " + cat1.food + "<br>");
// }
// else {
//     const dog1: Dog = new Dog("Mookie", 3, "Black");
//     dog1.display();
//     document.write("Current age: " + dog1.age + "<br>");
//     document.write("Next year age: " + (dog1.age + 1) + "<br>");
//     document.write("The color is: " + dog1.color + "<br>");
// }
// document.write("<hr>");
// // With the polymorphism ability:
// let myAnimal: Animal;
// myAnimal = (Math.random() < 0.5) ? new Cat("Hetzel", 5, "Mice") : new Dog("Mookie", 3, "Black");
// myAnimal.display();
// document.write("Current age: " + myAnimal.age + "<br>");
// document.write("Next year age: " + (myAnimal.age + 1) + "<br>");
// if (myAnimal instanceof Cat) {
//     document.write("The food is: " + (myAnimal as Cat).food + "<br>");
//     document.write("The food is: " + myAnimal.food + "<br>"); // From some TypeScript version we don't need down cast when we're inside if statement
// } else if(myAnimal instanceof Dog){
//     myAnimal.attack();
// }
// myAnimal.makeSound();
// // ------------------------
// const myWorker: Emp = {
//     fullName: 'Homer Simpson',
//     department: 'palace'
// }
// const sms1 = new Sms<string>('0544299048', 'hello world');
// sms1.send();
// const sms2 = new Sms<string>('0512312312', 'hello');
// sms2.send();
// const sms3 = new Sms<Date>('0512123200', new Date());
// sms3.send();
// const d = new Dog('Bart', 15,Color.Black);
// d.display();
const myProd = new Product(12, 'Bonzo', 50);
myProd.display();
