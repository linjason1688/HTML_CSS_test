function buy() {
    var ol = document.getElementById("oL");
    if (ol.innerHTML.length == 0) {
        ol.innerHTML = "<li>" + add_oL() + "</li>";
    }
    else {
        ol.innerHTML += "<li>" + add_oL() + "</li>";
    }
}

function add_oL() {
    var chk = document.querySelector("input[name ='item']:checked").value;
    return chk;
}