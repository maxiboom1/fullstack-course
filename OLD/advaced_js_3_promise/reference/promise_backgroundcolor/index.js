function changeBackgroundColor(){
    const colorArr = ['Green', 'Blue', 'Black', 'Yellow', 'Red'];
    const index = Math.floor(Math.random() * colorArr.length);
    const selectedColor = colorArr[index];

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(selectedColor.toLowerCase() == 'red'){
                reject('Red color is not allowed');
            }else{
                resolve(selectedColor); 
            }    
        }, 5000)
    })
}

document
.getElementById('btn')
.addEventListener('click', changeBackgroundColor);

function handleClick(){
    changeBackgroundColor()
    .then(setBackgroundColor)
    .catch((err) => {
        console.log(err)
    });
}


function setBackgroundColor(color){
    document.body.style.backgroundColor = color
}