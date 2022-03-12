/*
$('.order').click(function(e) {

    let button = $(this);

    if(!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000);
    }

});

*/



let a = document.querySelector('.order')
a.addEventListener('click', () => {
    if(!a.classList.contains('animate')){
        a.classList.add('animate');
        setTimeout(() =>{
            a.classList.remove('animate');
        }, 10000)
    }
})