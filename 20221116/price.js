function toilet_drop_down() {
    var ol = document.getElementById("toilet_ol");
    
    if (ol.innerHTML.length == 0) {
        ol.innerHTML += "<li>" + "和成HCG</li>" +
                        "<li>" + "TOTO</li>" + 
                        "<li>" + "凱薩</li>";
    }

    else {
        ol.innerHTML = "";
    }
}