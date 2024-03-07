const canvas = document.querySelector("#myCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// class Drop {
//     constructor() {
//         this.x = canvas.width / 2;
//         this.y = 0;
//         this.yspeed = 10;
//     }
//     fall() {
//         this.y = this.y + this.yspeed;
//     }

//     show() {
//         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//         ctx.beginPath()
//         ctx.moveTo(this.x, this.y);
//         ctx.lineTo(this.x, this.y + 10);
//         ctx.stroke();
//     }
// }
// if (canvas.getContext) {
//     let d = new Drop();

//     setInterval(() => {
//         d.show();
//         d.fall();
//     }, 500);
// }

// current time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

for (let y = 0; y < gridSize[1]; y++) {
    for (let x = 0; x < gridSize[0]; x++) {
        const n = simplex.noise2D(
            x / (gridSize[0] * 0.75),
            y / (gridSize[1] * 0.75)
        );
    }
}