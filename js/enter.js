function getCookie(key) {
    var array = document.cookie.split("; ")
    for (var item of array) {
        var newArray = item.split("=")
        if (newArray[0] == key) {
            return newArray[1];
        }
    }
}

var user_ = document.getElementsByClassName('user')[0].children[1]
var users_ = Boolean(getCookie('user'))
if (users_ == false) {
    user_.value = ''
} else {
    user_.value = getCookie('user')
}

var psd_ = document.getElementsByClassName('psd')[0].children[1]
var psds_ = Boolean(getCookie('psd'))
if (psds_ == false) {
    psd_.value = ''
} else {
    psd_.value = getCookie('psd')
}



var sunmit_ = document.getElementsByClassName('sunmit_')[0];
var reg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/;
var reg_ = /^\w{6,10}$/;
sunmit_.onclick = function () {
    if (user_.value != '' && psd_.value != '') {
        if (reg.test(user_.value) == false) {
            alert('账号错误')
        } else if (reg_.test(psd_.value) == false) {
            alert('密码错误')
        } else {
            if (getCookie('user') != user_.value) {
                alert('账号错误了')

            } else if (getCookie('psd') != psd_.value) {
                alert('密码错误')
            } else {
                alert('登录成功')
                window.location.href = '../index.html'
            }

        }

    } else if (user_.value == '') {
        alert('请输入账号')
    } else if (psd_.value == '') {
        alert('请输入密码')
    }
}

console.log();