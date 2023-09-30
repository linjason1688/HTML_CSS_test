function drop_down() {
    var ol = document.getElementById("li003");

    if (ol.innerHTML.length == 0) {
        ol.innerHTML += "<li>" + "item1</li>" +
                        "<li style=\"list-style-type: none\">" + "item2</li>";
    }
}