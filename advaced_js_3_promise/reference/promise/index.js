const isConnected = true; 
const isWatching = true;

function checkUserInteraction(successCallback, errorCallback){
        if(!isConnected) {
        errorCallback({
            type: "connectionError",
            message: "User is not connected"
        });
    }else if(!isWatching){
        errorCallback({
            type: "watchingError",
            message: "User is connected but is not watching"
        })
    }else {
        successCallback("User is connected and watching");
    }
}


function handleSuccess(message){
    console.log(message);
}

function handleError(err){
    console.error(err.type + ': '+ err.message);
 
}

// checkUserInteraction(handleSuccess, handleError);

function checkUserInteractionWithPromise(){
    return new Promise((successCallback, errorCallback) => {
        if(!isConnected) {
            errorCallback({
                type: "connectionError",
                message: "User is not connected"
            });
        }else if(!isWatching){
            errorCallback({
                type: "watchingError",
                message: "User is connected but is not watching"
            })
        } else {
            successCallback("User is connected and watching");
        }
    }
    )
}

const result = checkUserInteractionWithPromise();

console.log(result);

result
.then(handleSuccess)
.catch(handleError)
.finally(console.log('disconnected'));


// try{
    
// }catch (error) {

// }finally{

// }