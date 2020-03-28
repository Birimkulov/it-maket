// let burger = document.getElementsByClassName('burger')[0];
// let topMenu = document.getElementsByClassName('top-menu')[0];
// burger.addEventListener('click',() =>{
//     // console.log('test')
//     burger.classList.toggle('show-menu')
//     topMenu.classList.toggle('show')
// });

$('.burger').on('click',() =>{
    $('.burger').toggleClass('show-menu')
    $('.top-menu').toggleClass('show')
    $('body').toggleClass('lock')
});

$('.top-menu a').on('click', ()=>{
    $('.burger').removeClass('show-menu')
    $('.top-menu').removeClass('show')
    $('body').removeClass('lock')
});
