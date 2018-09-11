setTimeout(function () {
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 1000)

setTimeout(function(){
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
},2000)
setTimeout(function(){
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(3)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
},3000)
setTimeout(function(){
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
},4000)