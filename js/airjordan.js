document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
var thisColor = "red"
function changeImage(img) {
    let picture = document.getElementById("large")
    picture.src = "assets/" + thisColor + "-" + img + ".jpg"
}
function colorSelector(color) {
    thisColor = color
    var theImage = 1;
    while (theImage <= 8) {
        let cod = `aj${theImage}`
        thumbFile = `assets/${thisColor}-${theImage}.jpg`
        var thumb = document.getElementById(cod)
        thumb.src = thumbFile
        theImage++
    }
    changeImage(1)
}