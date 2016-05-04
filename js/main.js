$(document).ready(function() {
    // 获取窗口宽度，高度
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    $('body').css('height', winHeight);
    $('body').css('width', winWidth);
    $('#hello1').css('font-size', winWidth / 1920 * 88);
    $('#hello2').css('font-size', winWidth / 1920 * 40);
    $('#hello-input > input').css('font-size', winWidth / 1920 * 40);
    $('#hello-input > div > i').css('font-size', winWidth / 1920 * 40);
    $(window).resize(function() {
        $('body').css('height', window.innerHeight);
        $('body').css('width', window.innerWidth);
        $('#hello1').css('font-size', winWidth / 1920 * 88);
        $('#hello2').css('font-size', winWidth / 1920 * 40);
        $('#hello-input > input').css('font-size', winWidth / 1920 * 40);
        $('#hello-input > div > i').css('font-size', winWidth / 1920 * 40);
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
    $('#hello1').animo({ animation: 'fadeInLeft', duration: 3 });
    $('#hello2').animo({ animation: 'fadeInRight', duration: 3, delay: 0.5 });
    $('#hello-input').animo({ animation: 'fadeInUp', duration: 3, delay: 1 });

    // $('.lightbox-item').each(function(index, el) {
    //  $(this).css('height', $(this).width());
    // });
});
