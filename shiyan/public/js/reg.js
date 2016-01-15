/**
 * Created by zhb12 on 2015/11/19.
 */
var flag = '',
    flag1 = '',
    flag2 = '';
//||  re.test( inputEmail3.value )
function checkName() {
    var inputEmail3 = document.getElementById('inputEmail3');
    var userWarn = document.getElementById('userWarn');
    //判断是否是汉字、字母、数字组成
    //var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
    //var re = new RegExp(regu);
    //检查输入对象的值是否符合E-Mail格式
    var myReg = /^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
    //检查输入的电话号码格式是否正确
    //var myReg1 = /(^[1][3|5|8][0-9]{9}$)/;
    var myReg1 = /(^[1][3|5|8][0-9]{3}$)/;
    if (myReg.test( inputEmail3.value ) || myReg1.test( inputEmail3.value ) ) {
        userWarn.style.display = 'none';
        $.post('/select',{name:inputEmail3.value}, function(data) {
            if(data.affectedRows){
                userWarn.innerHTML = '用户名重复！';
                userWarn.style.display = 'block';
                userWarn.style.color = 'red';
                flag = 0;
            }else {
                userWarn.style.display = 'none';
                flag = 1;
            }
        })

    } else {
        userWarn.innerHTML = '不合法！';
        userWarn.style.display = 'block';
        userWarn.style.color = 'red';
        flag = 0;
    }
}
//检查密码
function checkPwd() {
    var inputPassword3 = document.getElementById('inputPassword3');
    var pwdWarn = document.getElementById('pwdWarn');
    //判断是否是字母、数字组成
    var regu =  /(^[0-9a-zA-Z]{6,16}$)/;
    if ( regu.test( inputPassword3.value )) {
        pwdWarn.style.display = 'none';
        flag1 = 1;
    }
    else {
        pwdWarn.innerHTML = '6-16不合法！';
        pwdWarn.style.display = 'block';
        pwdWarn.style.color = 'red';
        flag1 = 0;
    }
}
//两次密码不一致
function checkPwdAgain() {
    var inputPassword3 = document.getElementById('inputPassword3');
    var inputPassword1 = document.getElementById('inputPassword1');
    var pwdAgainWarn = document.getElementById('pwdAgainWarn');
    //判断是否是字母、数字组成
    if ( inputPassword1.value == inputPassword3.value) {
        pwdAgainWarn.style.display = 'none';
        flag2 = 1;
    } else {
        pwdAgainWarn.innerHTML = '两次密码不一致';
        pwdAgainWarn.style.display = 'block';
        pwdAgainWarn.style.color = 'red';
        flag2 = 0;
    }
}
//登录
function regnow() {
    if(flag == 1 && flag1 == 1 && flag2 == 1) {
        pwdAgainWarn.style.display = 'none';
        pwdWarn.style.display = 'none';
        userWarn.style.display = 'none';
        $.post(
            '/regist',
            {name :$('#inputEmail3').val(), pwd : $('#inputPassword3').val()},
            function(data) {
                //alert('ok')
              window.location.href = '/index.html';
            }
        )
    } else {
        pwdAgainWarn.style.display = 'block';
        pwdWarn.style.display = 'block';
        userWarn.style.display = 'block';
        alert('登录失败！')
    }
}

//$.ajax({
//    async : true,
//    type :'post',
//    url :'/regist',
//    data : {
//        name :name,
//        password :pwd
//    },
//    dataType :null,
//    success : function(data) {
//        location.href = '/public/index.html'
//    }
//})
