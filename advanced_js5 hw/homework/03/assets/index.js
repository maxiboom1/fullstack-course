
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())  
    .then((data) => renderListItems(data));

function renderListItems(users){
    const div = document.createElement('div');
    div.classList.add('list_items');
        for(const user of users){
            div.innerHTML += `<li class="list-group-item" id="${user.id}" onclick=(clickHandler(this))>${user.name}</li>`;
        }
    document.querySelector('.root').appendChild(div);
  }

 
function clickHandler(data){
    console.log(data.id)
}

document.getElementById("modal1").modal();
