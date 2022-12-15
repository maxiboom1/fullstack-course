console.log('Start');
// EX-1
// console.log(new Date().toLocaleTimeString())

//EX-2
// setTimeout(printTime,3000);

//EX-3
// let currentTime = new Date().toLocaleTimeString()
// setTimeout(()=> printTime(currentTime),3000);


// function printTime(time = new Date().toLocaleTimeString()){
//     //console.log(time);  
// }


//EX-4
// setTimeout(printRandom,3000);
// setTimeout(printRandom,5000);
// setTimeout(printRandom,7000);

// function printRandom(){
//     console.log(getRandom());    
// }

// function getRandom(){
//     return Math.floor(Math.random() * 101);
// }

// console.log('End');

//EX-5

// document.querySelector(".dynamic").innerHTML = Math.ceil(Math.random()*1000000);

// setInterval(setRandomNum,1000);

// function setRandomNum(){
//     const div = document.querySelector(".dynamic");
//     const currentNum = +div.innerHTML;
//     div.innerHTML = Math.floor(Math.random()*currentNum);
// }

//EX-6

// setInterval(()=>{
//     const color = Math.floor(Math.random()*16777215).toString(16);
//     console.log("#" + color);
//     document.body.style.backgroundColor = "#" + color;
//     },1000);

// EX-7

//The rendering process has a lifecycle of it's own and does not block the javascript thread. They both work independently. Solution is to create alert in other thread...

// document.body.style.backgroundColor = "Green";
// setTimeout(()=>alert('Done'),10);

// EX-8

// getRandomNumberAfterDelay((num) => console.log('Num after 3 sec: ' + num));
// function getRandomNumberAfterDelay(callback){
    
//     setTimeout(()=>{
//         callback( Math.floor(Math.random()*100) );
//     },3000);

// }

//EX - 9,10,11

//document.getElementById("btn").addEventListener('click',clickHandle);

// function clickHandle(){
//     getRandomNumberAfterDelay(100, 200, printNum);
// }

// function getRandomNumberAfterDelay(first,last, callback){ // callback == printNum()
    
//     setTimeout(()=>{
        
//         let result = Math.floor(Math.random() * last);
        
//         if (result< first){// EX-10
//             result = first
//             }

//         if (result % 2 != 0) {// EX-11
//             result = result + 1;
//             } 
        
//         callback(result);

//     },500)

// }

// function printNum(num){
//     document.querySelector(".dynamic").innerHTML = 'Returned num is: ' + num;
// }

//EX 12-13
// getUserFromServer(printUser);

// function getUserFromServer(callback) {
//     setTimeout(() => {
//         const user = { firstName: "Moishe", lastName: "Ufnik" }
//         const grades = [100, 98, 75, 80, 100, 87]; // EX-13
//         callback(user);
//         callback(grades);
//     }, 4000);
// }

// function printUser(user){
//     console.log('returned from server: ' + JSON.stringify(user));
// }


//EX-14

// document.getElementById("btn").addEventListener('click',showLocation);
// function showLocation(){
//     const span = document.querySelector('div').innerHTML;
//     let pos = '';
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         pos = 'Geolocations is not supported';
//     }
//     span.innerHTML = pos;
// }
// function showPosition(position){
//     document.querySelector('div').innerHTML = `<span>Your latitude is: ${position.coords.latitude}, and longtitude is: ${position.coords.longitude} </span>`;
// }

//EX-15

const clock = document.querySelector(".clock");
setInterval(updateTimeAndColor,1000);
function updateTimeAndColor(){
    const time = new Date().toLocaleTimeString();
    const color = Math.floor(Math.random()*16777215).toString(16);
    clock.style.color = "#" + color;
    clock.innerHTML = time;

}