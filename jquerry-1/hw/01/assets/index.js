$(document).ready(function(){

    $('.btn1, .btn2').click(handleClick);  
    
    function handleClick(event){
        const index = event.currentTarget.className.slice(-1); // fetchs the classname (btn1 or btn2 and slices last char (1 or 2))
        $('.target' + index).html($('.input' + index).val());
        $('.input' + index).hide();
    }

});


