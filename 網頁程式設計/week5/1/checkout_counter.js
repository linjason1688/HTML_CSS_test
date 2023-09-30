function pick_up() {
    var ol = document.getElementById("oL");

    if (ol.innerHTML.length == 0) {
        ol.innerHTML = "<li><table border=\"1\"; width=20%;><tbody><tr>\n\
                        <td width=\"80%\">" + add_item() + "</td>\n\
                        <td align=\"center\">" + add_price() + "</td>\n\
                        </tr></tbody></table></li>";
    }

    else ol.innerHTML += "<li><table border=\"1\"; width=20%;><tbody><tr>\n\
                          <td width=\"80%\">" + add_item() + "</td>\n\
                          <td align=\"center\">" + add_price() + "</td>\n\
                          </tr></tbody></table></li>";
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
            var label = document.querySelector("label[for='Rcoffee']").innerHTML;
            break;
        case "Milk":
            var label = document.querySelector("label[for='Rmilk']").innerHTML;
            break;
        case "Tea":
            var label = document.querySelector("label[for='Rtea']").innerHTML;
            break;
        case "Bread":
            var label = document.querySelector("label[for='Rbread']").innerHTML;
            break;
    }

    return label;
}