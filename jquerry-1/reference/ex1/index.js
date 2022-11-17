$('document').ready(function () {

    $('button').click(function () {

        $('#container').html("");

        for (let index = 0; index < 15; index++) {
            $('#container').append('<div class="border"></div>');
        }

        $('div').each(function () {
            $(this).css('background-color', getBgColor())
        });
    });

    function getBgColor() {
        const color = `#${Math.ceil(Math.random() * 1010000)}`
        return color;
    }

});

