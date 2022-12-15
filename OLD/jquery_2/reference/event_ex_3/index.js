$(function () {
    $('#btnAdd').click(function () {
        $('section').append('<div></div>');
    });

    $('section').on('mouseenter', 'div', function () {
        $(this).addClass('blue');
    })

    $('section').on('mouseleave', 'div', function () {
        $(this).removeClass('blue');
    })
});