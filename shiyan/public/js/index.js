/**
 * Created by zhb12 on 2015/11/12.
 */
var i_monve = document.getElementById('i_monve');
var web_nav = document.getElementById('web_nav');
var flag=false;
web_nav.onmouseover = function() {
    i_monve.style.transform = "rotate(180deg)";
}
web_nav.onmouseout = function() {
    i_monve.style.transform = "rotate(360deg)";
}
var work_time = document.getElementById('work_time');
var show_time = document.getElementById('show_time');
work_time.onmouseover = function() {
    show_time.style.display = 'block';
}
work_time.onmouseout = function() {
    show_time.style.display = 'none';
}
//jqÓÒ²àÏÔÊ¾
//$('#menu_right').hover(function() {
//    $('#menu_1').show();
//    $('#menu_right').css({
//        ' border': '2px solid #10B68C',
//        'border-right':"2px solid #fff"
//    })
//})
var menu_right = document.getElementById('menu_right');
var menu_1 = document.getElementById('menu_1');
var menu_2 = document.getElementById('menu_2');
var menu_3 = document.getElementById('menu_3');
var menu_middle = document.getElementById('menu_middle');
var menu_last = document.getElementById('menu_last');
/////////////////////////////////1111111111111111111111111
menu_right.onmouseover = function() {
    menu_1.style.display = 'block';
    menu_right.style.border = '2px solid #10B68C';
    menu_right.style.borderRight = '2px solid #fff ';
    menu_1.style.zIndex = '100';
    menu_right.style.zIndex = '101';
}
menu_1.onmouseover = function() {
    menu_1.style.display = 'block';
    menu_right.style.border = '2px solid #10B68C';
    menu_right.style.borderRight = '2px solid #fff ';
    menu_1.style.zIndex = '100';
    menu_right.style.zIndex = '101';
}
menu_right.onmouseout = function() {
    menu_1.style.display = 'none';
    menu_right.style.border = '2px solid #fff';
    menu_1.style.zIndex = '11';
    menu_right.style.zIndex = '10';
}
menu_1.onmouseout = function() {
    menu_1.style.display = 'none';
    menu_right.style.border = '2px solid #fff';
    menu_1.style.zIndex = '10';
    menu_right.style.zIndex = '11';
}
////////////////////////////////////////222222222222222222222222
menu_middle.onmouseover = function() {
    menu_2.style.display = 'block';
    menu_middle.style.border = '2px solid #10B68C';
    menu_middle.style.borderRight = '2px solid #fff ';
    menu_2.style.zIndex = '100';
    menu_middle.style.zIndex = '101';
}
menu_2.onmouseover = function() {
    menu_2.style.display = 'block';
    menu_middle.style.border = '2px solid #10B68C';
    menu_middle.style.borderRight = '2px solid #fff ';
    menu_2.style.zIndex = '100';
    menu_middle.style.zIndex = '101';
}
menu_middle.onmouseout = function() {
    menu_2.style.display = 'none';
    menu_middle.style.border = '2px solid #fff';
    menu_2.style.zIndex = '10';
    menu_middle.style.zIndex = '11';
}
menu_2.onmouseout = function() {
    menu_2.style.display = 'none';
    menu_middle.style.border = '2px solid #fff';
    menu_2.style.zIndex = '10';
    menu_middle.style.zIndex = '11';
}
/////////////////////////////33333333333333333333
menu_last.onmouseover = function() {
    menu_3.style.display = 'block';
    menu_last.style.border = '2px solid #10B68C';
    menu_last.style.borderRight = '2px solid #fff ';
    menu_3.style.zIndex = '100';
    menu_last.style.zIndex = '101';
}
menu_3.onmouseover = function() {
    menu_3.style.display = 'block';
    menu_last.style.border = '2px solid #10B68C';
    menu_last.style.borderRight = '2px solid #fff ';
    menu_3.style.zIndex = '100';
    menu_last.style.zIndex = '101';
}
menu_last.onmouseout = function() {
    menu_3.style.display = 'none';
    menu_last.style.border = '2px solid #fff';
    menu_3.style.zIndex = '10';
    menu_last.style.zIndex = '11';
}
menu_3.onmouseout = function() {
    menu_3.style.display = 'none';
    menu_last.style.border = '2px solid #fff';
    menu_3.style.zIndex = '10';
    menu_last.style.zIndex = '11';
}
/////////////////////////////////
$('#second_m').hover(
    function () {
        $('#second_menu').show();
        //$('#second_m').css({
        //    'border': '1px solid red',
        //    'backgroundColor': "#fff",
        //    'height':'180px',
        //    'width': '70px'
        //})
    },
    function () {
        $('#second_menu').hide();
        //$('#second_m').css({
        //    'border': 'none'
        //})
    }

)

//top
$('a.top').click(function(e) {
        e.preventDefault();
    $(document.body).animate({
        scrollTop :0
    },3000);
});
var topScroll = document.getElementById('topScroll');
    window.onscroll = function() {
        //var eventObj = window.event || event;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //alert(scrollTop)
        if(scrollTop >= 700) {
            topScroll.style.display = 'block';
        } else {
            topScroll.style.display = 'none';
        }
    }
        $.get(
            '/haha',
            function(data){
                if(data == null || data == undefined) {
                    $('#welcomeUser').html('ÇëµÇÂ¼');
                    //$('#hehe111').text('123');
                }else {
                    var name = data;
                    console.log('1111111'+JSON.stringify(name));
                    $('#welcomeUser').html(JSON.stringify(name));
                }
            }
        )


//if(true){
//    document.getElementById('hehe111').style.display='none';
//}