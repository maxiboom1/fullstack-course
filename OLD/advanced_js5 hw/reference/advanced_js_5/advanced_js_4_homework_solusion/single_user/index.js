const root = document.getElementById("root");

async function renderUser() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const method = "GET";
  try {
    const user = await getUser(method, url);
    const card = createCard(user);
    root.appendChild(card);
  } catch (err) {
    console.log(err);
  }
}

function getUser(method, url) {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();

    ajax.open(method, url);

    ajax.onload = () => {
      if (ajax.status == 200) {
        resolve(JSON.parse(ajax.responseText));
      } else {
        reject(
          `Error status: ${ajax.status}, Error message: ${ajax.statusText}`
        );
      }
    };

    ajax.onerror = () =>
      reject({
        status: ajax.status,
        statusText: ajax.statusText,
      });

    ajax.send();
  });
}

function createCard(data) {
  if (data) {
    const card = document.createElement("div");
    card.classList.add("card", "col-4");
    card.style.width = "18rem";
    card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">User Name: ${data.username}</p>
      <p class="card-text">Email: ${data.email}</p>
      <p class="card-text">Phone: ${data.phone}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">City: ${data.address.city}</li>
      <li class="list-group-item">Street: ${data.address.street}</li>
      <li class="list-group-item">${data.address.street}</li>
    </ul>
    <div class="card-body">
    <p class="card-text">Company: ${data.company.name}</p>
    </div>
    `;
    return card;
  }
}
