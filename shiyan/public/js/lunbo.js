/**
 * Created by zhb12 on 2015/11/12.
 */
var ul1 = document.getElementById('ul1');
var back = document.getElementsByClassName("back")[0];
var forward = document.getElementsByClassName("forward")[0];
//×Ô¶¯ÂÖ²¥
var backgroundObj = document.getElementById('images');
var i = 0;
backgroundObj.style.background = "url('images/1.jpg') no-repeat";
var v =  setInterval(show, 3000);
var arrImgs = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg','./images/6.jpg'];
function show() {
    backgroundObj.style.background = 'url('+ arrImgs[i] +') no-repeat';
    ++i;
    if(i == arrImgs.length) {
        i = 0;
    }
}
//µã»÷ÂÖ²¥
backgroundObj.onmouseover = function() {
    clearInterval(v);
    back.style.display = "block";
    forward.style.display = "block";
    ul1.style.display = "block";
}
backgroundObj.onmouseout = function() {
    v =  setInterval(show, 3000);
    back.style.display = "none";
    forward.style.display = "none";
    ul1.style.display = "none";
}
back.onclick = function() {
    if(i == 0) {
        i = arrImgs.length;
    }
    --i;
    backgroundObj.style.background = 'url('+ arrImgs[i] +') no-repeat';
}
forward.onclick = function() {
    if(i == arrImgs.length - 1) {
        i = -1;
    }
    ++i;
    backgroundObj.style.background = 'url('+ arrImgs[i] +') no-repeat';
}
//Ð¡È¦È¦
var index0 = document.getElementsByClassName('li-index')[0];
var index1 = document.getElementsByClassName('li-index')[1];
var index2 = document.getElementsByClassName('li-index')[2];
var index3 = document.getElementsByClassName('li-index')[3];
var index4 = document.getElementsByClassName('li-index')[4];
var index5 = document.getElementsByClassName('li-index')[5];
index0.onmouseover = function() {
    index0.style.backgroundColor = 'red';
    backgroundObj.style.background = 'url('+ arrImgs[0] +') no-repeat';
}
index1.onmouseover = function() {
    index1.style.backgroundColor = 'red';
    backgroundObj.style.background = 'url('+ arrImgs[1] +') no-repeat';
}
index2.onmouseover = function() {
    index2.style.backgroundColor = 'red';
    backgroundObj.style.background = 'url('+ arrImgs[2] +') no-repeat';
}
index3.onmouseover = function() {
    index3.style.backgroundColor = 'red';
    backgroundObj.style.background = 'url('+ arrImgs[3] +') no-repeat';
}
index4.onmouseover = function() {
    index4.style.backgroundColor = 'red';
    backgroundObj.style.background = 'url('+ arrImgs[4] +') no-repeat';
}

index5.onmouseover = function() {
    index5.style.backgroundColor = 'red';
    backgroundObj.style.background = 'url('+ arrImgs[5] +') no-repeat';
}

index0.onmouseout = function() {
    index0.style.backgroundColor = 'black';
    backgroundObj.style.background = 'url('+ arrImgs[0] +') no-repeat';
}
index1.onmouseout = function() {
    index1.style.backgroundColor = 'black';
    backgroundObj.style.background = 'url('+ arrImgs[1] +') no-repeat';
}
index2.onmouseout = function() {
    index2.style.backgroundColor = 'black';
    backgroundObj.style.background = 'url('+ arrImgs[2] +') no-repeat';
}
index3.onmouseout = function() {
    index3.style.backgroundColor = 'black';
    backgroundObj.style.background = 'url('+ arrImgs[3] +') no-repeat';
}
index4.onmouseout = function() {
    index4.style.backgroundColor = 'black';
    backgroundObj.style.background = 'url('+ arrImgs[4] +') no-repeat';
}

index5.onmouseout = function() {
    index5.style.backgroundColor = 'black';
    backgroundObj.style.background = 'url('+ arrImgs[5] +') no-repeat';
}