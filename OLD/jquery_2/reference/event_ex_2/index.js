$(function () {
    $('section div')
        .mouseenter(changeColor)
        .mouseleave(function () {
            $(this).css({ backgroundColor: 'yellow', color: 'black' })
        })
})



function changeColor() {
    console.log($(this));
    $(this).toggleClass(['red', 'blue', 'bold']);
}