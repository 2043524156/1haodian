

// 购物车
var car_text = document.getElementsByClassName('car_text')[0];
var commodity = document.getElementsByClassName('commodity')[0];
var noshop = document.getElementsByClassName('noshop')[0];
car_text.onmouseover = function () {
    commodity.style.display = 'block'
    if (commodity.children[0].children.length == 0) {
        commodity.style.display = 'none'
        noshop.style.display = 'block'
        car_text.onmouseout = function () {
            noshop.style.display = 'none'
        }
        noshop.onmouseout = function () {
            noshop.style.display = 'none'
        }
        noshop.onmouseover = function () {
            noshop.style.display = 'block'
        }
    }

}
commodity.onmouseover = function () {
    commodity.style.display = 'block'
    if (commodity.children[0].children.length == 0) {
        commodity.style.display = 'none'
        noshop.style.display = 'block'
        car_text.onmouseout = function () {
            noshop.style.display = 'none'
        }
        noshop.onmouseout = function () {
            noshop.style.display = 'none'
        }
        noshop.onmouseover = function () {
            noshop.style.display = 'block'
        }

    }

    // 增减/删除商品
    var minus = document.getElementsByClassName('minus');
    var plus = document.getElementsByClassName('plus');
    var shopnum = document.getElementsByClassName('shopnum');
    var delete_ = document.getElementsByClassName('delete');

    for (var i = 0; i < minus.length; i++) {

        minus[i].onclick = function () {
            var minus = document.getElementsByClassName('minus');
            var num = this.nextElementSibling.value
            if (num > 1) {
                num--
                this.nextElementSibling.value = num
                var sum = this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0]
                sum.innerHTML = '共' + num + '件商品'
                var mon = this.parentNode.nextElementSibling;
                var r = mon.firstChild.nodeValue.substr(1)
                mon.innerHTML = '￥' + r / (num + 1) * num
            } else {
                var p = confirm('确定要删除吗？')
                if (p) {
                    var li_ = this.parentNode.parentNode.parentNode.parentNode.parentNode;
                    li_.parentNode.removeChild(li_)
                }
            }
            // 计算总钱数及商品总数
            var s_money = null;
            var s_num = null
            var total = document.getElementsByClassName('total')[0]
            var closing = document.getElementsByClassName('closing')[0];
            for (var w = 0; w < minus.length; w++) {
                var shopMoney = document.getElementsByClassName('shopMoney')[w].firstChild.nodeValue.slice(1) - 0;
                var e = shopnum[w].value - 0;
                s_num += e
                s_money += shopMoney
                closing.innerHTML = '(' + s_num + ')'
                total.innerHTML = '￥' + s_money

            }
        }
    }


    for (var j = 0; j < plus.length; j++) {
        plus[j].onclick = function () {
            var num = this.previousElementSibling.value
            num++
            this.previousElementSibling.value = num
            var sum = this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0]
            sum.innerHTML = '共' + num + '件商品'
            var mon = this.parentNode.nextElementSibling;
            var r = mon.firstChild.nodeValue.substr(1)
            mon.innerHTML = '￥' + r / (num - 1) * num


            // 计算总钱数及商品总数
            var s_money = null;
            var s_num = null
            var total = document.getElementsByClassName('total')[0]
            var closing = document.getElementsByClassName('closing')[0];
            for (var w = 0; w < plus.length; w++) {
                var shopMoney = document.getElementsByClassName('shopMoney')[w].firstChild.nodeValue.slice(1) - 0;
                var e = shopnum[w].value - 0;
                s_num += e
                s_money += shopMoney
                // console.log(shopMoney);
                // console.log(s_money);
                closing.innerHTML = '(' + s_num + ')'
                total.innerHTML = '￥' + s_money

            }
        }
    }

    for (var k = 0; k < delete_.length; k++) {
        delete_[k].onmouseover = function () {
            this.style.backgroundColor = '#ff3c3c'
        }
        delete_[k].onmouseout = function () {
            this.style.backgroundColor = '#b1afaf'
        }
        delete_[k].onclick = function () {
            var li_ = this.parentNode.parentNode.parentNode.parentNode;
            li_.parentNode.removeChild(li_)
        }
    }


    for (var s = 0; s < shopnum.length; s++) {
        shopnum[s].onblur = function () {
            if (this.value <= 0 || isNaN(this.value) || this.value == '') {
                this.value = 1
            }
        }
    }
}
car_text.onmouseout = function () {
    commodity.style.display = 'none'
}
commodity.onmouseout = function () {
    commodity.style.display = 'none'
}







// 点击加入购物车
var j_car1 = document.getElementsByClassName('j_car1');

for (var y = 0; y < j_car1.length; y++) {
    j_car1[y].onclick = function () {
        var img2 = this.parentNode.parentNode.children[0].children[0].children[0].getAttribute('src');
        var price2 = this.parentNode.parentNode.children[1].children[0].firstChild.nodeValue;
        var name2 = this.parentNode.parentNode.children[2].children[0].firstChild.nodeValue;
        var str = `
        <h4>1号店
        <span>共1件商品</span>
    </h4>
    <div class="clear clearFix">
        <div class="shopImg">
            <img src="${img2}" width="90" height="90">
        </div>
        <div class="shopText">
            <div class="shopText1 clearFix">
                <h4>${name2}</h4>
                <a href="#" class="delete">×</a>
            </div>
            <p>默认</p>
            <div class="shopNum clearFix">
                <div>
                    <span class="minus">-</span><input type="text" class="shopnum" value="1"><span class="plus">+</span>
                </div>
                <strong class="shopMoney">${price2}</strong>
            </div>

        </div>
    </div>
    <p>全场包邮</p>`;
        var ul_ = document.getElementsByClassName('commodity')[0].children[0];
        var li_ = document.createElement('li')
        ul_.appendChild(li_)
        li_.innerHTML = str

    }
}

// 珠韵首饰 冰韵中加入购物车

var j_car2 = document.getElementsByClassName('j_car2');

for (var y = 0; y < j_car2.length; y++) {
    j_car2[y].onclick = function () {
        var img5 = document.getElementsByClassName('big_img')[0].children[0].children[0].getAttribute('src');
        var price5 = document.getElementsByClassName('des_price')[0].children[0].firstChild.nodeValue;
        var name5 = document.getElementsByClassName('des_name')[0].children[0].firstChild.nodeValue;
        var n_ipts = document.getElementsByClassName('n_ipt')[0].value;
        var str = `
        <h4>1号店
        <span>共1件商品</span>
    </h4>
    <div class="clear clearFix">
        <div class="shopImg">
            <img src="${img5}" width="90" height="90">
        </div>
        <div class="shopText">
            <div class="shopText1 clearFix">
                <h4>${name5}</h4>
                <a href="#" class="delete">×</a>
            </div>
            <p>默认</p>
            <div class="shopNum clearFix">
                <div>
                    <span class="minus">-</span><input type="text" class="shopnum" value="${n_ipts}"><span class="plus">+</span>
                </div>
                <strong class="shopMoney">￥${n_ipts * 1786}</strong>
            </div>

        </div>
    </div>
    <p>全场包邮</p>`;
        var ul_ = document.getElementsByClassName('commodity')[0].children[0];
        var li_ = document.createElement('li')
        ul_.appendChild(li_)
        li_.innerHTML = str

    }
}



// 支付页面
var ljzf = document.getElementsByClassName('buy')[0].children[1];
var body_ = document.getElementsByTagName('body')[0];
console.log(ljzf);
ljzf.onclick = function () {
    alert('请使用微信扫码支付')
    var mb = document.createElement('div')
    body_.appendChild(mb)
    mb.className = 'mb'
    var str1 = `<img src="./images/weixi.jpg" alt="" class="zf">
        <div class="x">×</div>`
    mb.innerHTML = str1
    var x_ = document.getElementsByClassName('x')[0];
    x_.onclick = function () {
        body_.removeChild(mb)
    }
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


var list = document.getElementsByClassName('list')[0].children[0]
var users_ = getCookie('user')
var str3_ = `<img src="./images/user.jpg" alt="" class="users_"><a href="#">15660018375</a>`
if (Boolean(getCookie('user'))) {
    list.className = 'users1_'
    list.innerHTML = str3_
}



