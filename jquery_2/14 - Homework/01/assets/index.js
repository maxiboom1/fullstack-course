$(function(){
    
    const squarsArr = createElementsArray('div',15,['red','blue']);
    $('#container').append(squarsArr);

    $('button').on('click',function(){
        const state = $(this).text().indexOf('in') == -1 ? 'in' : 'out'; // Set if its in or out state (for button text)
        const classToToggle = $(this).attr('id').replace("Button", "");  // Get id('redButton'), and clean 'Button' from it
        $(`.${classToToggle}`).fadeToggle(1000);
        $(this).text(`Fade ${state} ${classToToggle} squares`);
    })
    
    function createElementsArray(element,count,colors){
        const arr = [];
        for(let i = 0;i<count;i++){
            arr.push(`<${element} class='${colors[Math.round(Math.random())]}'>${i+1}</${element}>`);
        }
        return arr;
    }
})
