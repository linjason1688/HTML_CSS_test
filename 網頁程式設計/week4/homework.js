function dropdown() {
    var ul = document.getElementById("uL");
    
    if (ul.innerHTML.length == 0) {
        ul.innerHTML = "<li style=\"list-style:none\">" + "item1</li>" +
                       "<li style=\"list-style:none\">" + "item2</li>";
    }
    else {
        ul.innerHTML = "";
    }
}