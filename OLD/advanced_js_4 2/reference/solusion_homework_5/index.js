const div = document.getElementById('arrFromServer');
document
    .getElementById('btnArrFromServer')
    .addEventListener('click', handleClickAwaitAsync);

// eventlistener
// handleClick

// getArrayFromServerAsync
//  getRandomNumber
// checkNumber

function handleClick() {
    getArrayFromServerAsync(70)
        .then((arr) => {
            div.innerHTML = arr;
            div.classList.remove('text-danger');
        })
        .catch((error) => {
            div.innerHTML = error;
            div.classList.add('text-danger');
        });
}

function getArrayFromServerAsync(size = 100) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = getRandomNumber();
            const arr = [];
            // check if n is even
            if (n % 2 == 0) {
                for (let index = 0; index < size; index++) {
                    const number = getRandomNumber();
                    arr.push(number);
                }
                resolve(arr);
            } else {
                reject(`${n} is not even, can't get data form the server`);
            }
        }, 1000);
    })
}

function getRandomNumber(min = 0, max = 100) {
    return Math.ceil(Math.random() * (max - min) + min);
}


function handleClickCallbackHell() {
    getArrayFromServerAsync(70)
        .then((arr) => {
            console.log(arr);
            const number = arr[0];
            getArrayFromServerAsync(number)
                .then((arr) => {
                    console.log(arr);
                    const number = arr[0];
                    getArrayFromServerAsync(number)
                        .then((arr) => {
                            console.log(arr);
                            const number = arr[0];
                            getArrayFromServerAsync(number)
                                .then((arr) => {
                                    const number = arr[0];
                                    getArrayFromServerAsync(number)
                                        .then(arr => div.innerHTML = arr);
                                })
                                .catch((error) => {
                                    div.innerHTML = error;
                                    div.classList.add('text-danger');
                                })
                        })
                        .catch((error) => {
                            div.innerHTML = error;
                            div.classList.add('text-danger');
                        })
                }).catch((error) => {
                    div.innerHTML = error;
                    div.classList.add('text-danger');
                });
        })
        .catch((error) => {
            div.innerHTML = error;
            div.classList.add('text-danger');
        });
}


async function handleClickAwaitAsync() {
    try {
        const arr1 = await getArrayFromServerAsync(70);
        console.log(arr1);
        const arr2 = await getArrayFromServerAsync(arr1[0]);
        console.log(arr2);
        const arr3 = await getArrayFromServerAsync(arr2[0]);
        console.log(arr3);
        const arr4 = await getArrayFromServerAsync(arr3[0]);
        console.log(arr4);

        div.classList.remove('text-danger');
        div.innerHTML = arr4[0];

    } catch (error) {
        div.innerHTML = error;
        div.classList.add('text-danger');
    }
}

