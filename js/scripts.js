console.log("Welcome to my page");

function menuToggle() {
    if (document.body.clientWidth < 640) {
        var x = document.getElementById("myNavtoggle");
        if (x.className === "navtoggle") {
            x.className += " responsive";
        } else {
            x.className = "navtoggle";
        }
    }
}