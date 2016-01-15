/**
 * Created by zhb12 on 2015/11/16.
 */
jQuery(function($){
    var i = 1000;
    $('#retroclockbox1').flipcountdown();
    var i = 1;
    $('#retroclockbox_counter').flipcountdown({
        tick:function(){
            return i++;
        }
    });
    $('#retroclockbox2').flipcountdown({showHour:false,showMinute:false,showSecond:true});
    $('#retroclockbox3').flipcountdown({tzoneOffset:3,showSecond:false});
    $('#retroclockbox4').flipcountdown({am:true});
    $('#retroclockbox5').flipcountdown({speedFlip:50});
    $('#retroclockbox6').flipcountdown({tick:function(){
        return new Date('5/10/2012 12:34:23');
    }});
})
jQuery(function($){
    $('#retroclockbox_lg').flipcountdown({size:'lg'});
    $('#retroclockbox_md').flipcountdown({size:'md'});
    $('#retroclockbox_sm').flipcountdown({size:'sm'});
    $('#retroclockbox_xs').flipcountdown({size:'xs'});
})