const button = document.createElement('button');
button.innerHTML = 'Click Me';
document.body.appendChild(button);

button.addEventListener('click',handleClick);

function getEvenRandomNumberAfterDelay (callback, last, first){
    console.log('start');
    let number = Math.ceil(Math.random() * (last - first)) + first;

    // if(number % 2 == 1) number +=1;

    number = (number % 2 == 0) ? number +=1 : number;

    setTimeout(()=> callback(number), 5000);
    console.log(`Number is ${number}`);
}

function setRandomNumber(number){
    button.innerHTML = number;
    console.log('end');
}


function handleClick(){
    getEvenRandomNumberAfterDelay(setRandomNumber, 20, 10);
}


function getUserFromServer(callback) {
    setTimeout(() => {
  // Demo for getting user from the server:
        const user = { firstName: "Moishe", lastName: "Ufnik" }
        callback(user);
    }, 4000);
}

getUserFromServer(displayUser);

function displayUser(user){
    const userName = user.firstName;
    const lastName = user.lastName;
    console.log(`UserName is: ${userName} \n and last name is: ${lastName}`);
}