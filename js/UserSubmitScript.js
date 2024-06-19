function checkReason(r) {
    for (var i = 0; i < r.length; i++) {
        if (r[i].checked) {
            return true;
        }
    }

    return false;
}


function checkName(fn, ln) {
        return /^[a-zA-Zא-ת]{2,}$/i.test(fn) && /^[a-zA-Zא-ת]{2,}$/i.test(ln);
}


function checkEmail(e) {
    return /^[a-zA-Z\d!#$%&'*+-/=?^_{|}~`.]+@[a-zA-Z.\d-]+.[a-zA-Z]{2,} {0,}$/i.test(e);
}


function checkArea(a) {
    return /^[a-zA-Z]+$/.test(a);
}


function isOk(form) {
    var ok = false;

    var fn = form.firstName.value;
    var ln = form.lastName.value;
    var e = form.email.value;
    var r = form.reason;
    var a = form.area.value;

    if (!checkName(fn, ln)) {
        alert("You entered an invalid name!");
    } else if (!checkEmail(e)) {
        alert("Please enter a correct email address!");
    } else if (!checkReason(r)) {
        alert("Please state the reason for contacting me!");
    } else if (!checkArea(a)) {
        alert("Please choose or enter an area!");
    } else {
        alert("Thank you " + fn + " " + ln + "! We will contact you soon!");
        ok = true;
    }

    return ok;
}
