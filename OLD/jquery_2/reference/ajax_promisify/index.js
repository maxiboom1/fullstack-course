$(function () {
    $('#getDataBtn').click(async function () {
        try {
            const data = await getData('https://jsonplaceholder.typicode.com/todo')
            for (item of data) {
                $('ul').append(`<li>${item.title} &rarr; ${item.completed ? '<small class="text-success">Completed</small>' : '<small class="text-danger">"Not Completed"</small>'}</li>`)
            }
        } catch (error) {
            console.log(error);
        }
    });
});



function getData(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success: data => resolve(data),
            error: error => reject(error)
        })
    })
}
