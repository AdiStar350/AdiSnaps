var toggle = true;

function navBar(toggle) {
    if (toggle) {
        document.getElementById("nav").style.flex = "1 1 70px";
        return false;
    } else {
        document.getElementById("nav").style.flex = "0 0 0px";
        return true;
    }
}


