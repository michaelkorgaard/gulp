/*/////////////////////////////////////
| - Section-action, change opacity on hover
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

$(function () {
    $('.section-action__content--blue').hover(function () {
        $('.section-action__overlay--red').css('opacity', '1');
    }, function () {
        $('.section-action__overlay--red').css('opacity', '0.78');
    });

    $('.section-action__content--blue').hover(function () {
        $('.section-action__overlay--blue').css('opacity', '0.78');
    }, function () {
        $('.section-action__overlay--blue').css('opacity', '1');
    });
});

/*/////////////////////////////////////
| - HEADER ACTION ON SCROLL
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(".header").addClass("header__scroll");
    } else {
        $(".header").removeClass("header__scroll");
    }
});

$(".nav__mobile-btn").click(function () {
    $("nav ul").toggleClass("mobile-nav-active");
    $(".menu-overlay").toggleClass("display-block");
    $("html").toggleClass("html-menu");
});

$(".menu-overlay").click(function () {
    $("nav ul").removeClass("mobile-nav-active");
    $(".menu-overlay").removeClass("display-block");
    $("html").removeClass("html-menu");
});

/*/////////////////////////////////////
| - SCROLL ON CLICK MENU
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

$(".menu-logo").click(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-action").offset().top -70 }, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-action").offset().top -140 }, 'slow');
    }
});

$(".menu-about").click(function() {
    $("nav ul").removeClass("mobile-nav-active");
    $(".menu-overlay").removeClass("display-block");
    $("html").removeClass("html-menu");
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-about").offset().top -70 }, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-about").offset().top -140 }, 'slow');
    }
});

$(".menu-why").click(function() {
    $("nav ul").removeClass("mobile-nav-active");
    $(".menu-overlay").removeClass("display-block");
    $("html").removeClass("html-menu");
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-services").offset().top -70 }, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-services").offset().top -140 }, 'slow');
    }
});

$(".menu-cases").click(function() {
    $("nav ul").removeClass("mobile-nav-active");
    $(".menu-overlay").removeClass("display-block");
    $("html").removeClass("html-menu");
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-cases").offset().top -70 }, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-cases").offset().top -140 }, 'slow');
    }
});

$(".menu-contact").click(function() {
    $("nav ul").removeClass("mobile-nav-active");
    $(".menu-overlay").removeClass("display-block");
    $("html").removeClass("html-menu");
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-contact").offset().top -70}, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-contact").offset().top -140 }, 'slow');
    }
});

/*/////////////////////////////////////
| - SCROLL ON CLICK FIRST SECTION
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

$(".action-left-btn").click(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-contact").offset().top -70}, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-contact").offset().top -140 }, 'slow');
    }
});

$(".action-right-btn").click(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-about").offset().top -70 }, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-about").offset().top -140 }, 'slow');
    }
});

/*/////////////////////////////////////
| - CASES BTN
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

$(".cases-btn").click(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $('html,body').animate({ scrollTop: $(".section-contact").offset().top -70 }, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(".section-contact").offset().top -140 }, 'slow');
    }
});

/*/////////////////////////////////////
| - TEXTAREA EXPAND 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

$(document)
.one('focus.autoExpand', 'textarea.autoExpand', function(){
    var savedValue = this.value;
    this.value = '';
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
})
.on('input.autoExpand', 'textarea.autoExpand', function(){
    var minRows = this.getAttribute('data-min-rows')|0, rows;
    this.rows = minRows;
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 25);
    this.rows = minRows + rows;
});







/*/////////////////////////////////////
| - FADE ON SCROLL
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
  
$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + 1;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){  
                $(this).animate({'opacity':'1'},1500);
            } 
        }); 
    });
});