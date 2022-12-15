$(function () {
    // It wont work on new elements
    // $('#dataTable tbody tr').on('click', consoleText);

    $('#dataTable tbody').on('click', 'tr', consoleText);

    $('#dataTable tbody').append('<tr><th scope="row">3</th><td colspan="2">Larry the Bird</td><td>@twitter</td></tr>');

});

function consoleText() {
    // console.log(this);
    console.log($(this).text());
}