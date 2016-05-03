$(document).ready(function() {
    // 获取窗口宽度，高度
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    $('body').css('height', winHeight);
    $('body').css('width', winWidth);
    $(window).resize(function() {
        $('body').css('height', window.innerHeight);
        $('body').css('width', window.innerWidth);
    })

    // var isBordered = 0;
    // window.onscroll = function(event) {
    //     /* Act on the event */
    //     if ($(this).scrollTop() && 　!isBordered) {
    //         $('.navbar-mynavbar').css('box-shadow', '0 5px 5px -3px rgba(0, 0, 0, 0.12)');
    //         isBordered = 1;
    //     } else if (!$(this).scrollTop()) {
    //         isBordered = 0;
    //         $('.navbar-mynavbar').css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0.12)');
    //     };
    // }
    // 
    $('#hello1').animo( { animation: 'fadeInLeft' , duration: 5 } );
    $('#hello2').animo( { animation: 'fadeInRight' , duration: 5 } );
    $('#hello-input').animo( { animation: 'fadeInUp' , duration: 5 } );
});
