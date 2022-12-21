// Constructor assignment
class Product {
    // private id: number;
    // public name: string;
    // public price: number;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        // this.id = id;
        // this.name = name;
        // this.price = price;
    }
    display() {
        document.write('ID ' + this.id + '<br>');
        document.write('Name ' + this.name + '<br>');
        document.write('Price ' + this.price + '<br>');
    }
}
