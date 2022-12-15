$(function(){
    $('li').hide();
    $('h3').hover(function(){
        $(this).next().find("li").toggle();
    })
})
