function myFunction() {
    var x = document.getElementById("myNavigationbar");
    if (x.className === "Navigationbar") {
        x.className += " responsive";
    }
    else {
        x.className = "Navigationbar";
    }
}
