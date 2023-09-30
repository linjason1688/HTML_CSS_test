function run() {
    var ol = document.getElementById("oL");
    if (ol.innerHTML.length = 0) {
        ol.innerHTML = "<li>" + ol.innerHTML.length + "</li>";
    }
    else {
        ol.innerHTML += "<li>" + ol.innerHTML.length + "</li>";
    }
}