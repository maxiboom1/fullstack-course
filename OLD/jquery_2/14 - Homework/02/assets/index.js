
$(function(){ 
    function getWeather(city){
        $.ajax({
            url: "http://api.weatherstack.com/current?access_key=4bbf71c527109c1edbbc7021c09286cc&query=" + city,
            //url: "assets/test.txt",
            dataType: "json",
            success: (data) => {
                $('.root').append(createCard(data));
                console.log(data)},
            error: error => console.log(error.status)
        
            });
    }
    

    function createCard(data){

        return `
            <div class="card mt-5" style="width: 18rem;">
                <img class="card-img-top" src="${data.current.weather_icons[0]}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${data.location.name} , ${data.current.temperature} </h5>
                    <p class="card-text">${data.current.weather_descriptions}</p>
                    </div>
            </div>
        `;
    
    }

})



