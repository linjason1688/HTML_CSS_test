// javascript 之物件宣告
var item = [{ itemName: "Coffee", price: "2" },
            { itemName: "Milk", price: "3" },
            { itemName: "Tea", price: "1" },
            { itemName: "Bread", price: "5" }];

function initMenu() {
    var date = new Date();
    document.getElementById("menuDate").innerHTML = date.toISOString().substring(0, 10);
    buildMenuItem();
    
    document.getElementById("R0").value = item[0].itemName;
    document.getElementById("R1").value = item[1].itemName;
    document.getElementById("R2").value = item[2].itemName;
    document.getElementById("R3").value = item[3].itemName;
}

function buildMenuItem() {
    var menulist = document.getElementById("menuList");

    if (menulist.innerHTML.length == 0) {
        menulist.innerHTML = "<li><table border=\"1\"; width=50%;><tbody><tr><td width=\"80%\" align=\"center\">" +
            "點選項目" + "</td><td align=\"center\">" + "單價" + "</td></tr></tbody></table></li>";
    }
        
    for (var i = 0; i < item.length; i++) {
        menulist.innerHTML +=
            "<li><table border=\"1\"; width=50%;><tbody><tr><td width=\"80%\"><input type=\"radio\" name=\"item\" id=\"R" +
            i.toString() + "\">" + item[i].itemName + "</td><td align=\"center\">" +
            item[i].price + "</td></tr></tbody></table></li>";
    }
        
}

function shoppingCarOnmousedown() {
    var ol = document.getElementById("oL");
    if (ol.innerHTML.length == 0)
        ol.innerHTML = "<li id="+ add_price().toString() +"><table border=\"1\"; width=30%;><tbody><tr><td width=\"80%\" >" +
            add_item() + "</td><td align=\"center\">" +
            add_price() + "</td></tr></tbody></table></li>";
    else ol.innerHTML += "<li id="+ add_price().toString() +"><table border=\"1\"; width=30%;><tbody><tr><td width=\"80%\">" +
        add_item() + "</td><td align=\"center\">" +
        add_price() + "</td></tr></tbody></table></li>";
}


function add_item() {
    var chk = document.querySelector('input[name = "item"]:checked').value;
    return chk;
}

function add_price() {
    var chk = document.querySelector('input[name = "item"]:checked').value;
    var pri = 0;

    for (var i = 0; i < item.length; i++) {
        if (chk == item[i].itemName) {
          pri = item[i].price;  
        }
    } 
    return pri;
}

function CalculateTotal() {
    var ol = document.getElementById("oL");
    var oLlist = ol.getElementsByTagName("li");
    var total = 0;

    for (var i=0;i<oLlist.length;i++) {
        total += parseInt(oLlist[i].id);
    }

    ol.innerHTML += "<li><table border=\"1\"; width=30%;><tbody><tr><td width=\"80%\">"+
                    "總金額: " + "</td><td align=\"center\">" +total 
                    + "</td></tr></tbody></table></li>";
    ol = document.getElementById("拉進購物車");
    ol.onclick = "";
    ol.value = "終止輸入";

    ol = document.getElementById("shoppingCar");
    ol.ondragover = "";
    ol = document.getElementById("總金額");
    ol.onclick = "";
    ol.value = "終止結算";
}

function drag(ev) {
    ev.preventDefault();
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(ev) {
    shoppingCarOnmousedown();
}