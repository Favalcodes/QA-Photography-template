$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.header__nav__list').toggleClass('open')
    })
})

$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.view-navs').removeClass('open')
    })
})

$(document).ready(function(){
    $('.home').on('click', function(){
        $('.view-navs').toggleClass('open')
    })
})

$(document).ready(function(){
    $('.burger').on('click', function(){
        $(this).toggleClass('open')
    })
})
