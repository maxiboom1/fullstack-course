
$(document).ready(() => {

    // const form = document.querySelector('form');
    // form.addEventListener('submit', handleSubmit);
    $('form').submit(handleSubmit);

    // const form = document.querySelector('form');
    // form.style.backgroundColor = 'yellow';

    //this is all the function that i want to do for form 
    $('form')
        .css('background-color', 'yellow')
        .addClass('test-class')
        .toggleClass('blue')
        .toggleClass('test-class');

    $('#btn1')
        .on('click', () => $('p').toggleClass('bg-blue'))
        .click(() => $('p').css('color', "red"));

    $('p').siblings().addClass('bg-blue');

    $('div').append("<b>hello</b>");
    $('p').prepend("<b>hello</b>")

    $('b').html('this is innerHTML');


    // const elements = document.getElementsByTagName('b');

    // for (const element of elements) {
    //     element.innerHTML = "This is VanilaJS"
    // }







    // const btn1 = document.querySelector('#btn1');
    // btn1.addEventListener('click', ()=> document.querySelector('p').style.color = "red");



    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((name, value) => {
            data[name] = value;
        })
        console.log(data);
    }
});
