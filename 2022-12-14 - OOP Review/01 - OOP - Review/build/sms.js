// Generics 
class Sms {
    constructor(phone, message) {
        this.phone = phone;
        this.message = message;
    }
    send() {
        document.write('Send ' + this.message + ' to ' + this.phone + '<br>');
    }
}
