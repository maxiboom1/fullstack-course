$(function () {
    $('#getDataBtn').click(function () {
        $.ajax({
            url: 'https://api.chucknorris.io/jokes/rando',
            success: data => $('#joke').append(getCard(data)),
            error: error => console.log(error.status)
        })
    });
});


function getCard(data) {
    console.log(data)
    return `<div class="card" style="width: 18rem">
    <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">
        ${data.value}
      </p>
    </div>
  </div>`
}

