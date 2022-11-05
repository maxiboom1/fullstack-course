//EX-1
document.getElementById('btn').addEventListener('click',clickHandler)
function clickHandler(){
    generate7BoomAfterDelayAsync(+document.getElementById('min').value, +document.getElementById('max').value)
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
}

function generate7BoomAfterDelayAsync(min,max){
    console.log(min, max)
    const random = Math.floor(Math.random()*(max-min) + min);
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(random %7 ==0){resolve(random)}
            else{reject('number is not good for you sorry')}
        },1000)
       
    })
}

// EX-7
const character_generator = [ // array of char generators functions
    function(){return String.fromCharCode( 48 + Math.floor(Math.random()*10))},  // ASCII code 48-57 is 0-9 numbers
    function(){return String.fromCharCode( 65 + Math.floor(Math.random()*26))},  // ASCII code 65-90 is A-Z 
    function(){return String.fromCharCode( 97 + Math.floor(Math.random()*26))},   // ASCII code 97-122 is a-z
]

function passwordGen(){
    let password = '';
    let randomIndex;
    for (let i = 0; i<6;i++){
        randomIndex = Math.floor(Math.random() * 3)
        password += character_generator[randomIndex](); // generate random char from character_generator[0-2] and add to password
    }
        
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(validPassword(password)){
                resolve('Your password is: ' + password);
                } else {
                reject('Failed to pass filter, generate again (' + password + ')');
                }
        },1000)
        
    })
}

function validPassword(password){
    const filter = []; // we will fill it with 'numbers', 'small_letters','capital_letters'   
    for (const char of password){
        let charCode = char.charCodeAt(0)
        
        if( charCode<58 && !filter.includes('numbers')){ 
            filter.push('numbers');
        }else if( 64<charCode && charCode<91 && !filter.includes('capital_letters')){
            filter.push('capital_letters');
        }else if(96<charCode && charCode<123 && !filter.includes('small_letters')){ 
            filter.push('small_letters');
        }
    }
    if (filter.length ==3 ){return true} else {return false}  
}    

passwordGen()
.then((msg)=> console.log(msg))
.catch((e)=> console.log(e))
