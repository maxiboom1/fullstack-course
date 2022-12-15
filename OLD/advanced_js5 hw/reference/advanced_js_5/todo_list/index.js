
// 
function handleClick() {
    getTodos('GET', 'https://jsonplaceholder.typicode.com/todos')
        .then(data => createTodoList(JSON.parse(data)))
        .catch(err => console.log(`status: ${err.status}, statusText: ${err.statusText}`))
}

// get data from the server from url https://jsonplaceholder.typicode.com/todos
function getTodos(method, url) {
    return new Promise((resolve, reject) => {

        const ajax = new XMLHttpRequest();

        ajax.open(method, url);

        ajax.onload = () => {
            if (ajax.status >= 200 && ajax.status <= 300) {
                resolve(ajax.responseText);
            } else {
                reject({
                    status: ajax.status,
                    statusText: ajax.statusText
                })
            }
        }

        ajax.send();
    })
}

// create the list 
function createTodoList(data) {
    document.getElementById('root').innerHTML = "";

    const list = document.createElement('ul');
    list.classList.add("list-group", "list-group-numbered");

    if (data) {
        data.forEach(item => {
            const li = createListItem(item);
            list.appendChild(li);
        });
    }
    document.getElementById('root').appendChild(list);
}

// create list item
function createListItem(item) {
    const li = document.createElement('li');
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
    li.innerHTML = `
            <div class="ms-2 me-auto">
            <div class="fw-bold"> ${item.title}</div>
                <span class=${item.completed ? 'text-success' : 'text-danger'}> ${item.completed}</span>
            </div>
            <span class="badge bg-primary rounded-pill">${item.userId}</span>
            `;
    return li;
}
