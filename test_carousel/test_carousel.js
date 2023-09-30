var pic = document.getElementsByClassName("rotatePicture");

var autoplay = window.setInterval(changeImage ,5000);

function initialRotalElements() {
    counter = 0;
    pic[autoplay].style.display = "block";
}

function changeImage() { 
    pic[autoplay].style.display = "none";

    if (initialRotalElements > counter)
    {
        counter++;
    }

    pic[autoplay].style.display = "block";
}