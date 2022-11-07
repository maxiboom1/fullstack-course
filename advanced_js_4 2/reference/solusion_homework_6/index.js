// getPizzaFromServerAsync
function getPizzaFromServerAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = getRandomNumber();
            if (n % 2 == 0) {
                const pizza = {
                    r: getRandomNumber(10, 50),
                    price: getRandomNumber(20, 80),
                    toppings: getRandomNumber(0, 4),
                }
                resolve(pizza);
            } else {
                reject(`${n} is not even, failed to retrieve data form server`);
            }
        }, 1000)
    })
}
// evenListener

document
    .getElementById('btn')
    .addEventListener('click', handleClick);

// handleClick
async function handleClick() {
    try {
        const pizza = await getPizzaFromServerAsync();
        document.getElementById('message').innerHTML = JSON.stringify(pizza);
    } catch (err) {
        document.getElementById('message').innerHTML = err;
    }
}

// getRandomNumber
function getRandomNumber(min = 0, max = 100) {
    return (Math.ceil(Math.random() * (max - min)) + min);
}

function handleClickCallBack() {
    let myPromise = getPizzaFromServerAsync();
    myPromise = myPromise.then(pizza => {
        document.getElementById('message').innerHTML = JSON.stringify(pizza);
    });
    myPromise.catch(err => {
        document.getElementById('message').innerHTML = err;
    });

}

