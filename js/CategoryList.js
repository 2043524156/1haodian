var j_car1 = document.getElementsByClassName('j_car1');
console.log(j_car1);


for (var i = 0; i < j_car1.length; i++) {
    j_car1[i].onclick = function () {
        var img2 = this.parentNode.parentNode.children[0].children[0].children[0];
        console.log(img2);
        var price2 = this.parentNode.parentNode.children[1].children[0].firstChild.nodeValue;
        console.log(price2);
        var name2 = this.parentNode.parentNode.children[2].children[0].firstChild.nodeValue
        console.log(name2);
        var fun = JSON.stringify(name2);
        console.log(fun);
        var str = `
        <h4>1号店
        <span>共1件商品</span>
    </h4>
    <div class="clear clearFix">
        <div class="shopImg">
            <img src="images/per_2.jpg" width="90" height="90">
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
        console.log(ul_);
        var li_ = document.createElement('li')
        ul_.appendChild(li_)
        li_.innerHTML = str

    }
}


// 浏览历史清空
var empty = document.getElementsByClassName('empty')[0];
var history_show = document.getElementsByClassName('history_show')[0];
empty.onclick = function () {
    history_show.removeChild(history_show.children[0])
}
