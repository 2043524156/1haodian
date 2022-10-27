// 选择尺码和颜色

var choice_ul = document.getElementsByClassName('choice_ul');
var li_ = choice_ul[0].children;
for (var j = 0; j < li_.length; j++) {
    li_[j].onclick = function () {
        for (var k = 0; k < li_.length; k++) {
            li_[k].className = ''
        }
        this.className = 'checked'
    }
}

var lis_ = choice_ul[1].children;
for (var j = 0; j < lis_.length; j++) {
    lis_[j].onclick = function () {
        for (var k = 0; k < lis_.length; k++) {
            lis_[k].className = ''
        }
        this.className = 'checked'
    }
}

// 加减珍珠项链数量
var n_ipt = document.getElementsByClassName('n_ipt')[0];
var n_btn_1 = document.getElementsByClassName('n_btn_1')[0];
var n_btn_2 = document.getElementsByClassName('n_btn_2')[0];

n_btn_1.onclick = function () {
    var num = n_ipt.value;
    num++
    n_ipt.value = num
}
n_btn_2.onclick = function () {
    var num = n_ipt.value;
    num--
    if (num <= 0) {
        num = 1
    }
    n_ipt.value = num
}

n_ipt.onblur = function () {
    if (n_ipt.value <= 0 || isNaN(n_ipt.value) || n_ipt.value == '') {
        n_ipt.value = 1
    }
}

// 自动计算金额
var checkbox = document.getElementsByClassName('checkbox');
var team_sum = document.getElementsByClassName('team_sum')[0].children[0];
for (var q = 0; q < checkbox.length; q++) {
    var sum_ipt = document.getElementsByClassName('team_sum')[0].children[2];
    sum_ipt.onblur = function () {
        var z_sum = 0;
        for (var z = 0; z < checkbox.length; z++) {
            var v = checkbox[z].children[0].checked
            if (v) {
                var x = checkbox[z].nextElementSibling.firstChild.nodeValue.substring(1) - 0;
                z_sum += x
            }
            if (sum_ipt.value <= 0 || isNaN(sum_ipt.value) || sum_ipt.value == '') {
                sum_ipt.value = 1
                team_sum.innerHTML = sum_ipt.value
            } else {
                team_sum.innerHTML = z_sum * sum_ipt.value
            }
        }
    }
    checkbox[q].onclick = function () {
        var z_sum = 0;
        for (var z = 0; z < checkbox.length; z++) {
            var v = checkbox[z].children[0].checked
            if (v) {
                var x = checkbox[z].nextElementSibling.firstChild.nodeValue.substring(1) - 0;
                z_sum += x
            }
            team_sum.innerHTML = z_sum * sum_ipt.value
        }
    }
}