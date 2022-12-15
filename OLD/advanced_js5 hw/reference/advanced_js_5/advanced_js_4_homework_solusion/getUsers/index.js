const root = document.querySelector("#root");

function renderUsers() {
  root.innerHTML = "";

  const ajax = new XMLHttpRequest();

  ajax.open("GET", "https://jsonplaceholder.typicode.com/users");

  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        const data = JSON.parse(ajax.responseText);
        data.forEach((user) => {
          const row = creatRow(user);
          root.appendChild(row);
        });
      } else {
        console.log(
          `Error status: ${ajax.status}, Error message: ${ajax.statusText}`
        );
      }
    }
  };

  ajax.send();
}

function creatRow(user) {
  const row = document.createElement("tr");
  row.innerHTML = `
  <th scope="row">${user.name}</th>
  <td>${user.username}</td>
  <td>${user.email}</td>
  <td>${user.address.city}</td>
  `;
  return row;
}
