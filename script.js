//your JS code here. If required.
let element = document.getElementById("level")
let count = 0;
while (element.parentNode != null) {
    if (element.parentNode.nodeName == "HTML") {
        count++;
        alert("The level of the element is: " + count);
        break;
    }
    else {
        count++;
        element = element.parentNode;
    }