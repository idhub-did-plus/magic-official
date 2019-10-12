$(document).ready(function($) {

    $('.language dl dt').click(function(e) {
        $(this).siblings('dd').slideToggle('fast');
        e.stopPropagation();
    });
    $(document).click(function() {
        $('.language dd').hide();
    })


    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });

    $('.TAB_CLICK').each(function(index, el) {
        $(this).find("li").filter(':first').trigger('click');
    });
    // 数字走动
    $('.num').on('inview', function(event, isInView) {
        if (isInView) {
            $('.num').countTo();
        }
    });
    // 自定义单选
    $('[role=checkbox]').each(function() {
        var input = $(this).find('input[type="checkbox"]');
        input.each(function() {
            if ($(this).attr('checked')) {
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })
        input.change(function() {
            $(this).parents('label').toggleClass('checked');
        });
    });

    // 滚动导航悬浮
    $(document).on('scroll', function() {
        var scrollH = $(this).scrollTop();
        if (scrollH > $('.header').height()) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
});