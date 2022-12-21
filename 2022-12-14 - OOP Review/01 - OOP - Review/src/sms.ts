// Generics 

class Sms<T> {  
    
    public phone: string;
    public message: T;

    constructor(phone: string, message:T){
        this.phone = phone;
        this.message = message;
    }

    public send(): void {
        document.write('Send ' + this.message + ' to ' + this.phone + '<br>' );
    }

}