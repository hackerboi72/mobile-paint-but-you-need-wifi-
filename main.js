var canvas1 = document.getElementById("canvas")
var config = canvas1.getContext('2d'); 
//var mouseandrats = 0 
var color = ("teal")
var lineWidth = 3
var lastpositionx = 0 
var lastpositiony = 0 
var width = screen.width
var width2 = screen.width - 70
var height2 = screen.height - 300
if (width < 992) {
    document.getElementById("canvas").width = width2 
    document.getElementById("canvas").height = height2  
    document.body.style.overflow = "hidden"
} 
/*canvas1.addEventListener("mousedown", my_mousedown)
function my_mousedown() {
    mouseandrats = "mousedown"
}
canvas1.addEventListener("mouseup", my_mouseup)
function my_mouseup() {
    mouseandrats = "mouseup"
}
canvas1.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave() {
    mouseandrats = "mouseleave"
}*/
canvas1.addEventListener("touchstart", my_touchstart)
function my_touchstart(e) {
    console.log("touchstart")
    lastpositionx = e.touches[0].clientX - canvas1.offsetLeft 
    lastpositiony = e.touches[0].clientY - canvas1.offsetTop 
}
/*canvas1.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
currentpositionx = e.clientX - canvas1.offsetLeft 
currentpositiony = e.clientY - canvas1.offsetTop 
    if (mouseandrats == "mousedown") {
            config.beginPath() 
        config.strokeStyle = color 
        config.lineWidth = 2
        config.moveTo(lastpositionx, lastpositiony)
        config.lineTo(currentpositionx, currentpositiony)
        config.stroke()
    }
    lastpositionx = currentpositionx
    lastpositiony = currentpositiony 
}*/
canvas1.addEventListener("touchmove", my_touchmove)
function my_touchmove(e) {
currentpositionx = e.touches[0].clientX - canvas1.offsetLeft 
currentpositiony = e.touches[0].clientY - canvas1.offsetTop 
    /*if (mouseandrats == "mousedown") {
            config.beginPath() 
        config.strokeStyle = color 
        config.lineWidth = 2
        config.moveTo(lastpositionx, lastpositiony)
        config.lineTo(currentpositionx, currentpositiony)
        config.stroke()
    }*/
    config.beginPath() 
    config.strokeStyle = color 
    config.lineWidth = 2
    config.moveTo(lastpositionx, lastpositiony)
    config.lineTo(currentpositionx, currentpositiony)
    config.stroke()
    lastpositionx = currentpositionx
    lastpositiony = currentpositiony 
} 