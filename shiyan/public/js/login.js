/**
 * Created by zhb12 on 2015/11/19.
 */
function loginNow() {
    $.post(
        '/userLogin',
        {name:$('#inputEmail3').val(), pwd:$('#inputPassword3').val()},
        function(data) {
            console.log(data)
            if(data[0].count){
                window.location.href='/index.html';

            } else{
                $('#message').html('Please check your username or password!');
            }
        }
    )
}

