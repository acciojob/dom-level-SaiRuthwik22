//your JS code here. If required.
let element = document.getElementById("level")
let count = 0;
while (element.parentNode != null) {
    if (element.parentNode.nodeName == "HTML") {
        count+=1;
        alert("The level of the element is: " + count);
        break;
    }
    else {
        count+=1;
        element = element.parentNode;
    }
}