$(document).ready(function () {
    $(".uk-slidenav-previous").css("margin-left", "-20px;");
    $('#img-disp-1').hover(function() {
        $(this).append('<div class="cloth-disp-origin-cover"><a href="cloth.html"><p class="p-content" style="margin-top: 20px;">历史记录1</p></a><a><p class="p-content" style="margin-top: 25px;">历史记录2</p></a><a><p class="p-content" style="margin-top: 25px;">历史记录3</p></a><a><p class="p-content" style="margin-top: 25px;">历史记录4</p></a></div>');
        var X = $(this).position().top;
        var Y = $(this).position().left;
        $('.cloth-disp-origin-cover').css({
            'top': X,
            'left': Y,
            'height': $(this).height(),
            'width': $(this).width(),
            'padding-top': $(this).height() - 280,
        })
        $('.button-like')
        $('.button-like')
        $('.cloth-disp-origin-cover').hover();
    }, function() {
        $('.cloth-disp-origin-cover').remove();
    });

    $('#img-disp-2').hover(function() {
        $(this).append('<div class="cloth-disp-origin-cover"><a href="cloth.html"><p class="p-content" style="margin-top: 20px;">历史记录1</p></a><a><p class="p-content" style="margin-top: 25px;">历史记录2</p></a><a><p class="p-content" style="margin-top: 25px;">历史记录3</p></a><a><p class="p-content" style="margin-top: 25px;">历史记录4</p></a></div>');
        var X = $(this).position().top;
        var Y = $(this).position().left;
        $('.cloth-disp-origin-cover').css({
            'top': X,
            'left': Y,
            'height': $(this).height(),
            'width': $(this).width(),
            'padding-top': $(this).height() - 280,
        })
        $('.button-like')
        $('.button-like')
        $('.cloth-disp-origin-cover').hover();
    }, function() {
        $('.cloth-disp-origin-cover').remove();
    });

    $('#img-disp-3').hover(function() {
        $(this).append('<div class="cloth-disp-origin-cover"></div>');
        var X = $(this).position().top;
        var Y = $(this).position().left;
        $('.cloth-disp-origin-cover').css({
            'top': X,
            'left': Y,
            'height': $(this).height(),
            'width': $(this).width(),
            'padding-top': $(this).height() - 280,
        })
        $('.button-like')
        $('.button-like')
        $('.cloth-disp-origin-cover').hover();
    }, function() {
        $('.cloth-disp-origin-cover').remove();
    });

    $('#img-disp-4').hover(function() {
        $(this).append('<div class="cloth-disp-origin-cover"></div>');
        var X = $(this).position().top;
        var Y = $(this).position().left;
        $('.cloth-disp-origin-cover').css({
            'top': X,
            'left': Y,
            'height': $(this).height(),
            'width': $(this).width(),
            'padding-top': $(this).height() - 280,
        })
        $('.button-like')
        $('.button-like')
        $('.cloth-disp-origin-cover').hover();
    }, function() {
        $('.cloth-disp-origin-cover').remove();
    });

    $('.img-disp').click(function() {
        window.location.href= $(this).parent().children('a').attr('href');
    });
});