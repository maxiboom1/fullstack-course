// Constructor assignment

class Product{  // Compiler magic
    // private id: number;
    // public name: string;
    // public price: number;

    constructor(private id:number, public name: string, public price:number){
        // this.id = id;
        // this.name = name;
        // this.price = price;
    }

    public display(): void{
        document.write('ID ' + this.id + '<br>');    
        document.write('Name ' + this.name + '<br>');    
        document.write('Price ' + this.price + '<br>');    
    }

}