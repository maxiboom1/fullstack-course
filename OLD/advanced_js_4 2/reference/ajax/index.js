function showTodoList() {

    // init AJAX
    const ajax = new XMLHttpRequest();

    // setting what to do when ready State change 
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4) {

            if (ajax.status == 200) {
                // const data = JSON.parse(ajax.responseText);
                const data = ajax.responseText;
                renderData(data);
            } else {
                console.log(ajax.statusText);
            }
        }
    }

    // ajax.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    ajax.open('GET', 'test.txt');
    ajax.send();
}

showTodoList();

// function renderData(data) {
//     console.log(data);
//     const div = document.createElement('div');
//     data.forEach(element => {
//         const el = document.createElement('div');
//         el.innerHTML = element.title;
//         div.appendChild(el);
//     });
//     document.body.appendChild(div);
// }

function renderData(data) {
    document.getElementById('root').innerHTML = data;
}