let moveOn = document.getElementById("moveOn");

let inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "number") {
        inputs[i].addEventListener("keyup", moveOnFunc);
    }
}

function check() {
    let returnValue = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "number") {
            if (inputs[i].value == (document.getElementsByName(inputs[i].id + "value")[0].value)) {
                inputs[i].style.borderColor = "green";
            } else if (inputs[i].value == "") {
                inputs[i].style.borderColor = "#dee2e6";
                returnValue = false;
            } else {
                inputs[i].style.borderColor = "red";
                returnValue = false;
            }
        }
    }
    return returnValue;
}

function moveOnFunc() {
    if (check()) {
        moveOn.disabled = false;
    } else {
        moveOn.disabled = true;
    }
}

function changePage() {
    location.href = document.getElementsByName("uri")[0].value;
}