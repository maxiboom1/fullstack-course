function getUserLocation(){
    return new Promise((resolve, reject)=>{
        navigator
        .geolocation
        .getCurrentPosition(position => {
           const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({latitude, longitude});
        }, err =>{
            reject(err.message);
        })
    }) 
}

getUserLocation()
    .then((position)=> console.log(position))
    .catch(err => console.log(err));