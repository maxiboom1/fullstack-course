


getUserLocationAsync()
    .then(position => console.log("This is from then" + JSON.stringify(position)))
    .catch(err => console.log(err.message));



(async function getLocation() {
    try {
        const position = await getUserLocationAsync();
        console.log("This is from async await " + JSON.stringify(position));
    } catch (err) {
        console.log(err.message);
    }
})();


function getUserLocationAsync() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success(resolve), (err) => {
            reject(err);
        });
    })
};


function success(resolve) {
    return (position) => {
        resolve(position);
    };
}
