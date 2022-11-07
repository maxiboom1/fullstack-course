// EX-1
const colors = ['red','blue','green','white','grey','black',];
document.getElementById('btn_color').addEventListener('click',clickHandler);
async function clickHandler(){
    try{
        const color = await getRandomColorAfterDelayAsync();
        document.getElementById('btn_color').style.backgroundColor = color;
        document.getElementById('msg').innerHTML = 'Chosen color was ' + color;
    } catch(e){
        document.getElementById('msg').innerHTML = e;  
    }
    
}

function getRandomColorAfterDelayAsync(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const color = getRandomColor();
            if(color == 'black'){reject('Unlucky, you got Black :(');}
            else{resolve(color);}
        }, 1000);
    })
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// EX-2
document.getElementById('btn_geolocation').addEventListener('click',clickHandler2);

async function clickHandler2(){
    try{
        const position = await getUserLocationAsync();
        document.getElementById('location').innerHTML =  'Longtitude is: ' + position.coords.longitude + ', and latitude is: ' + position.coords.latitude; 
    } catch(e){
        document.getElementById('location').innerHTML = 'error: ' + e;  
    }
    
}

function getUserLocationAsync(){
    
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition((pos) => {resolve(pos)}, (e)=>{reject(e.code)})
    })

}
