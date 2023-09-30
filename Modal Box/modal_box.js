// Get the modal
//var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = btn_click();

function btn_click() {
    document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = close_modal();

function close_modal() {
    document.getElementById("myModal").style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     // if (event.target == modal) {
//     //     modal.style.display = "none";
//     // }
//     alert("ttt");
//     if (event.target == document.getElementById("myModal")) {
//         document.getElementById("myModal").style.display = "none";
//     }
// }