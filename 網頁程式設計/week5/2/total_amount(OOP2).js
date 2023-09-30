function pick_up() {
    var ol = document.getElementById("oL");

    if (ol.innerHTML.length == 0) {
        ol.innerHTML = "<li id="+add_price().toString()+"><table border=\"1\"; width=20%;><tbody><tr>\n\
                        <td width=\"80%\">" + add_item() + "</td>\n\
                        <td align=\"center\">" + add_price() + "</td>\n\
                        </tr></tbody></table></li>";
    }
    else {
        ol.innerHTML += "<li id="+add_price().toString()+"><table border=\"1\"; width=20%;><tbody><tr>\n\
                        <td width=\"80%\">" + add_item() + "</td>\n\
                        <td align=\"center\">" + add_price() + "</td>\n\
                        </tr></tbody></table></li>";
    }
}

// javascript 之物件宣告
var item = [ {itemName:"Coffee", price:"2"},
             {itemName:"Milk", price:"3"},
             {itemName:"Tea", price:"1"},
             {itemName:"Bread", price:"5"}];

function initMenu() {
    var date = new Date();
    document.getElementById("menuDate").innerHTML = date.toISOString().substring(0, 10);

    // 設定物件名稱的屬性值到 <span> html, <span> 做視覺呈現
    document.getElementById("item0").innerHTML = item[0].itemName;
    document.getElementById("item1").innerHTML = item[1].itemName;
    document.getElementById("item2").innerHTML = item[2].itemName;
    document.getElementById("item3").innerHTML = item[3].itemName;

    // 設定物件名稱的屬性值到 <Radio> html, <Radio> 做選項呈現
    document.getElementById("R0").value = item[0].itemName;
    document.getElementById("R1").value = item[1].itemName;
    document.getElementById("R2").value = item[2].itemName;
    document.getElementById("R3").value = item[3].itemName;

    // 設定物件價格的屬性值到 <span> html, <span> 做視覺呈現
    document.querySelector("label[for='Lprice0']").innerHTML = item[0].price;
    document.querySelector("label[for='Lprice1']").innerHTML = item[1].price;
    document.querySelector("label[for='Lprice2']").innerHTML = item[2].price;
    document.querySelector("label[for='Lprice3']").innerHTML = item[3].price;
}

function add_item() {
    var chk = document.querySelector("input[name='item']:checked").value;
    return chk;
}

function add_price() {
    var chk = document.querySelector("input[name='item']:checked").value;

    switch (chk) {
        case item[0].itemName:
            var pri = item[0].price;
            break;
        case item[1].itemName:
            var pri = item[1].price;
            break;
        case item[2].itemName:
            var pri = item[2].price;
            break;
        case item[3].itemName:
            var pri = item[3].price;
            break;
    }

    return pri;
}

function CaculateTotal() {
    var ol = document.getElementById("oL");
    var olList = document.getElementsByTagName("li");

    var total = 0;
    for(var i=0;i<olList.length;i++) {
        total += parseInt(olList[i].id);
    }

    ol.innerHTML += "<li><table border=\"1\"; width=20%;><tbody><tr><td width=\"80%\">"+
                    "總金額: " + "</td><td align=\"center\">" +total 
                    + "</td></tr></tbody></table></li>";

    var ol = document.getElementById("選購");
    ol.onclick = "";
    ol.value = "終止輸入";

    var ol = document.getElementById("總金額");
    ol.onclick = "";
    ol.value = "終止結算";
}