// $(document).ready(function () {
$(function () {
    // $('button.red').click(function () { fadeSquares(event, 'red') })
    // $('button.blue').click(function (event) { fadeSquares(event, 'blue') })
    $('button.red').click(fadeRed);
    $('button.blue').click(fadeBlue);

    // $('body').css('background-color', 'red');
});


function fadeSquares(event, color) {
    $(`div.${color}`).fadeToggle(2000);
    const btn = event.target;
    const text = `Fade ${$(btn).text().indexOf('out') > -1 ? 'in' : 'out'} ${color} squares`;
    $(btn).text(text)
}

// Option 2

function fadeRed(event) {
    fade(event, 'red');
}

function fadeBlue(event) {
    fade(event, 'blue');
}



function fade(event, color) {
    const button = $(event.target);
    if ($(`div.${color}`).css('display') == 'none') {
        $(`div.${color}`).fadeIn(2000);
        $(button).text(`Fade Out  ${color} squares`);
    } else {
        $(`div.${color}`).fadeOut(2000);
        $(button).text(`Fade In ${color} squares`);
    }
}