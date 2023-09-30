function choose_course() {
    var ol = document.getElementById("oL");

    if (ol.innerHTML.length == 0) {
        ol.innerHTML = "<table border=\"1\"; width=20%;><tbody><tr><td><li>" +
                        add_oL() +"</li></td></tr></tbody></table>";
    }
    else {
        ol.innerHTML += "<table border=\"1\"; width=20%;><tbody><tr><td><li>" +
                        add_oL() +"</li></td></tr></tbody></table>";
    }
}

function add_oL() {
    var chk = document.querySelector("input[name=item]:checked").value;
    return chk;
}