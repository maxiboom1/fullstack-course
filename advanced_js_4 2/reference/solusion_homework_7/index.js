// generateStrongPasswordAsync 
function generateStrongPasswordAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const password = getRandomPassword();
            if (isValid(password)) {
                resolve(password);
            } else {
                reject(`${password} is a weak password`);
            }
        }, 1000)
    })
}

// eventListener
document.getElementById('btn').addEventListener('click', handleClick)


// handleClick
async function handleClick() {
    const div = document.getElementById('message');
    try {
        const password = await generateStrongPasswordAsync();
        div.classList.remove('text-danger');
        div.innerHTML = password;
    } catch (err) {
        div.classList.add('text-danger');
        div.innerHTML = err
    }
}

// isValid
function isValid(password) {
    return password.length == 6 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password)
}

// getRandomNUmber
function getRandomPassword() {
    const pattern = 'ABCDEFGHIJKLMNOPQRSTWUVXYZabcdefghijklmnopqrstwuvxyz0123456789';
    const arr = [];
    // for 6 times
    for (let index = 0; index < 6; index++) {
        const num = getRandomNUmber(0, pattern.length - 1);
        arr.push(pattern.charAt(num));
    }
    return arr.join('');
}

function getRandomNUmber(min, max) {
    return (Math.ceil(Math.random() * (max - min)) + min);
}