
getData('GET', 'https://jsonplaceholder.typicode.com/users')
    .then(data => createUsers(JSON.parse(data)))
    .catch(err => console.log(err));

function getData(method, url) {
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
                });
            }
        }

        ajax.send();

    });
}

function createUsers(data) {
    // console.log(data);
    if (data) {
        data.forEach(user => {
            const item = document.createElement('div');
            item.classList.add("card", "mb-3", "col-lg-6");
            item.innerHTML = `
                <div class="row g-0">
                <div class="col-md-4">
                <img
                    src="https://picsum.photos/300/300?random=${user.id}"
                    class="img-fluid rounded-start"
                    width="200"
                    alt="${user.name}"
                />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">
                    ${user.address.street} ${user.address.city} ${user.address.zipcode}
                    </p> 
                    <p class="card-text">
                    <small class="text-muted">${user.phone}</small>
                    <small class="text-muted">${user.email}</small>
                    </p>
                </div>
                </div>
                </div>
            `;
            document.getElementById('root').appendChild(item);
        });
    }
}
