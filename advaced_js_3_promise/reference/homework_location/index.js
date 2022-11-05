// check if geolocation is supported by browser
if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(successCallback, errCallback);

// if not supported throw error
} else {
    throw('geolocation is not accessible');
}

function successCallback(pos){
    const message = `latitude: ${pos.coords.latitude} 
    longitude : ${pos.coords.longitude}`;
    console.log(message);

    const span = document.createElement('span');
    span.innerHTML = message;

    document.body.appendChild(span);
}

function errCallback(e){

    console.log(`Error: ${e.message}`);

    const span = document.createElement('span');
    span.innerHTML = e.message;

    document.body.appendChild(span);
}

console.log('This is after the geolocation request');