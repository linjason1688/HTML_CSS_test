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

function showDate() {
    var date = new Date();
    document.getElementById("menuDate").innerHTML = date.toISOString().substring(0, 10);
}

function add_item() {
    var chk = document.querySelector("input[name='item']:checked").value;
    return chk;
}

function add_price() {
    var chk = document.querySelector("input[name='item']:checked").value;

    switch(chk) {
        case "Coffee":
            var price = document.querySelector("label[for='Rcoffee']").innerHTML;
            break;
        case "Milk":
            var price = document.querySelector("label[for='Rmilk']").innerHTML;
            break;
        case "Tea":
            var price = document.querySelector("label[for='Rtea']").innerHTML;
            break;
        case "Bread":
            var price = document.querySelector("label[for='Rbread']").innerHTML;
            break;
    }

    return price;
}

function CalculateTotal() {
    var ol = document.getElementById("oL");
    var oLlist = ol.getElementsByTagName("li");
    var total = 0;
    
    for (var i=0;i<oLlist.length;i++) {
        total += parseInt(oLlist[i].id);
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