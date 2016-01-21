/**
 * Created by Administrator on 2016/1/20.
 */
$(function(){
    $('.home').hover(function() {
        $('.home-1').show();
    },function() {
        $('.home-1').slideUp('slow');
    })

//二级菜单背景颜色改变
    $("#home-1 ul li:lt(2)").hover(function() {
        $(this).addClass("ha");
    },function() {
        $(this).removeClass("ha");
    })
    //三角形旋转
    $(".nav-ul>li").hover(function() {
        $(this).children('i').addClass("i-rotate");
        $(this).children('i').removeClass("i-rotate1");
        //console.log('111');
    },function() {
        $(this).children('i').addClass("i-rotate1");
    })
})

