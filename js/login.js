var hqyzm = document.getElementsByClassName('hqyzm')[0];
var num = 60;
var timer = null;
var c = true;
var l = Math.floor(Math.random() * 10000);
if (l < 1000) {
    l = 1000
}
console.log(l);
hqyzm.onclick = function () {
    if (c == true) {
        c = false
        alert('本次验证码为' + l)
        clearInterval(timer)
        timer = setInterval(function () {
            num--
            hqyzm.innerHTML = '(' + num + '秒)重发'
            if (num <= 0) {
                clearInterval(timer)
                num = 60
                hqyzm.innerHTML = '获取验证码'
                c = true
            }
        }, 1000)

    }
}



function setCookie(key, value, time) {
    var date_ = new Date();
    date_.setDate(date_.getDate() + time);
    document.cookie = `${key}=${value};expires=${date_}`;
}
var tell_reg = /^1[3578]\d{9}$/;
var psd_reg = /^\w{6,10}$/;


var submit_ = document.getElementsByClassName('submit_')[0];
submit_.onclick = function () {

    var tell_ = document.getElementsByClassName('tell')[0].children[0].value;
    var psd_ = document.getElementsByClassName('psd')[0].children[0].value;
    var psd1_ = document.getElementsByClassName('psd1')[0].children[0].value;
    var yanzheng = document.getElementsByClassName('yanzheng')[0].value;
    if (tell_reg.test(tell_) == true) {

        if (psd_reg.test(psd_) == true) {
            window.location.href = '../index.html'
            if (yanzheng == l) {
                if (psd1_ != psd_) {

                    alert('两次密码不一致')
                } else {
                    alert('注册成功')
                    window.location.href = '../enter.html'
                    window.e
                    setCookie('user', tell_)
                    setCookie('psd', psd_)

                }

            } else {
                alert('验证码错误')
            }
        } else {
            alert('密码错误')
        }
    } else {
        alert('手机号错误')
    }

    // window.location.href = '../enter.html'

}



function getCookie(key) {
    var array = document.cookie.split("; ")
    for (var item of array) {
        var newArray = item.split("=")
        if (newArray[0] == key) {
            return newArray[1];
        }
    }
}

