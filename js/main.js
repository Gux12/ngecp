$(document).ready(function() {
    // 这个是index.html相关的代码


    // 获取窗口宽度，高度
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    $('body').css('height', winHeight);
    $('body').css('width', winWidth);
    $('#hello1').css('font-size', winWidth / 1920 * 88);
    $('#hello2').css('font-size', winWidth / 1920 * 40);
    $('#hello-input > input').css('font-size', winWidth / 1920 * 40);
    $('#hello-input > div > i').css('font-size', winWidth / 1920 * 40);
    $('.navbar-mynavbar .navbar-nav > li > a').css('font-size', winWidth / 1920 * 16);
    $(window).resize(function() {
        $('body').css('height', window.innerHeight);
        $('body').css('width', window.innerWidth);
        $('#hello1').css('font-size', winWidth / 1920 * 88);
        $('#hello2').css('font-size', winWidth / 1920 * 40);
        $('#hello-input > input').css('font-size', winWidth / 1920 * 40);
        $('#hello-input > div > i').css('font-size', winWidth / 1920 * 40);
        $('.navbar-mynavbar .navbar-nav > li > a').css('font-size', winWidth / 1920 * 16);
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




    // 这部分是搜索以后服装展示的页面desire_cloth_style_display.html相关的代码
    // $('.lightbox-item').each(function(index, el) {
    //  $(this).css('height', $(this).width());
    // });
    findAllCloth(1);
    function findAllCloth(pos) {
        if ($('#cloth-disp'+pos).length) {
           $('#cloth-disp' + pos).animo({ animation: 'fadeInUp', duration: 0.5 ,delay: 0.1*(pos-1)}, findAllCloth(pos + 1));
        }   
    }
});
