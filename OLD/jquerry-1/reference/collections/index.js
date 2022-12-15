
$('document').ready(function () {
    // console.log($('div'));
    const divs = document.querySelectorAll('div');
    // console.log(divs);

    const divCollections = document.getElementsByTagName('div');
    // console.log(divCollections);
});


function testJquery() {
    $('div').each(function (index) {
        $(this).text(index + 1);
    });
}