$(document).ready(function(){

    $('.btn1').click(handleClick1);  
    
    function handleClick1(val){
        console.log(val)
        $('.target1').html($('.input1').val());
        $('.input1').hide();
    }
  
    $('.btn2').click(handleClick2);  
    
    function handleClick2(){
        $('.target2').html($('.input2').val());
        $('.input2').hide();
    }

























});


