function getEvenRandomNumberAfterDelay (first, last){
    const randomNumber = Math.ceil(Math.random() * (last - first)) + first;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(randomNumber % 2 == 0){
                resolve(randomNumber);
            }else{
                reject("Failed to generate even number");
            }
        }, 5000);
    });
}
getEvenRandomNumberAfterDelay(100, 200)
.then(num => {
    console.log(num);
    return num + 2;
 })
.then(num => {
    console.log(num);
    return num * 2;
 })
 .then(num => {
    console.log(num);
    console.log(num - 2);
 })
.catch(err => console.error(err))
.finally(console.log('I have tried to getEvenRandomNumberAfterDelay'));

// function handler(resolve, reject, randomNumber)
//     {
//         setTimeout(() => {
//             if(randomNumber % 2 == 0){
//                 resolve(randomNumber);
//             }else{
//                 reject("Failed to generate even number");
//             }
//         }, 5000);
//     }
