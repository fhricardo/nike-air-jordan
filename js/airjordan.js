document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
var thisColor = "red"
console.log(thisColor)
function changeImage(img) {

    console.log(img)
    let picture = document.getElementById("large")
    picture.src = "assets/" + thisColor + "-" + img + ".jpg"
    console.log(thisColor)
}
function colorSelector(color) {
    thisColor = color
    console.log(thisColor)

    var theImage = 1;
    while (theImage <= 8) {
        let cod = `aj${theImage}`
        console.log(cod)
        console.log(theImage)
        thumbFile = `assets/${thisColor}-${theImage}.jpg`
        var thumb = document.getElementById(cod)
        thumb.src = thumbFile
        theImage++
    }
    changeImage(1)

}