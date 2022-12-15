$(function () {
    $('#getDataBtn').click(getData);
});

function displayAsList(data) {
    for (item of data) {
        $('ul').append(`<li>${item.title}<li>`)
    }
}

function getData() {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        success: (data) => displayAsList(data),
        error: (error) => console.error(error.status)
    })

}

function getTodoList(url) {
    const ajax = new XMLHttpRequest();

    ajax.open('GET', url, {});

    ajax.onload = function () {
        if (ajax.status >= 200 && ajax.status <= 300) {
            const data = JSON.parse(ajax.responseText);

            return data;
        } else {
            console.log(`Error: ${ajax.status} ${ajax.statusText}`);
        }
    }
    ajax.send();
}