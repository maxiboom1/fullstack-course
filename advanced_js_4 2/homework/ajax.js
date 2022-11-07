document.getElementById('get_id_btn').addEventListener('click',clickHandler)

async function clickHandler(){
    
    try{
        const id = document.getElementById('id').value; 
        const user = await getUser(id);
        const userDiv = createUserDiv(JSON.parse(user),id);
        render(userDiv);
    }catch(e){
        console.log(e)
    }

}

function getUser(id){

    return new Promise ((resolve,reject) =>{ 

        if(!id){reject('No id');}
        const ajax = new XMLHttpRequest();
        ajax.onload =() => {
            resolve(ajax.responseText);        
        }
        ajax.open('GET','https://jsonplaceholder.typicode.com/users/'+ id);
        ajax.send();
    
    })

}

function createUserDiv(user,id){
    const div = document.createElement('div');
    const text = `
    <div class="card" style="width: 32rem;">
    <div class="card-header"><b>${user.name}:</b></div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Name</b>: ${user.name}</li>
    <li class="list-group-item"><b>Username</b>: ${user.username}</li>
    <li class="list-group-item"><b>Phone num</b>: ${user.phone}</li>
    <li class="list-group-item"><b>City</b>: ${user.address.city}</li>
    <li class="list-group-item"><b>Street</b>: ${user.address.street}</li>
    <li class="list-group-item"><b>Zip code</b>: ${user.address.zipcode}</li>
    <li class="list-group-item"><b>Company</b>: ${user.company.name}</li>
    </ul>
    </div>
    `
    div.innerHTML = text;
    return div;
}

function render(userDiv){
    document.querySelector('.user_card').innerHTML = '';
    document.querySelector('.user_card').appendChild(userDiv);
}