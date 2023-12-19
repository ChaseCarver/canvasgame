const canvas = document.getElementById("myCanvas");
const myCanvas = canvas.getContext("2d");
let points = 0
var pointsDisplay = document.getElementById("pointsDisplay")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let playerY = 250
let playerX = 500
let velocityY = 0
let velocityX = 0


document.getElementById("left").addEventListener("click", function(a){console.log("mousedown")})
document.getElementById("left").addEventListener("onmousedown", function(a){console.log("mouseup")})

document.getElementById("right").addEventListener("onclick", function(){console.log("mousedown")})
document.getElementById("right").addEventListener('onmouseup', function(){console.log("mouseup")})

document.getElementById("up").addEventListener("onclick", function(){console.log("mousedown")})
document.getElementById("up").addEventListener('onmouseup', function(){console.log("mouseup")})

document.getElementById("down").addEventListener("onclick", function(){console.log("mousedown")})
document.getElementById("down").addEventListener('onmouseup', function(){console.log("mouseup")})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
myCanvas.fillStyle = "#FF0000";
myCanvas.fillRect(playerX, playerY, -75, -75);
let pointPosX = getRandomInt((canvas.width - 10))
let pointPosY = getRandomInt((canvas.height - 10))
myCanvas.fillRect(pointPosX + 10, pointPosY + 10, -10, -10);
//if player X range is equal to point x range AND player Y range is equal to point Y range then HIT
let spawnPoint = () => {
if(pointPosX <= playerX && pointPosX >= playerX - 75 && pointPosY <= playerY && pointPosY >= playerY - 75){
    console.log("HIT!")
    myCanvas.clearRect(pointPosX + 10, pointPosY + 10, -10, -10);
    pointPosX = getRandomInt(canvas.width - 10)
    pointPosY = getRandomInt(canvas.height - 10)
    if(pointPosX <= playerX && pointPosX >= playerX - 75 && pointPosY <= playerY && pointPosY >= playerY - 75){
        spawnPoint();
        console.log("spawned inside square, respawning point.")
    }
    else{
    myCanvas.fillRect(pointPosX + 10, pointPosY + 10, -10, -10);
    points++
    pointsDisplay.textContent = points}
    return;
}else{return;}}
let offscreen = () => {if (playerY > canvas.height || playerY < 75 || playerX> canvas.width || playerX < 75){
    console.log("offscreen")
    myCanvas.clearRect(playerX, playerY, -75, -75);
    playerY = 250
    playerX = 500
    points = 0
    pointsDisplay.textContent = points
    velocityX = 0
    velocityY = 0
    alert("you died!")
    requestAnimationFrame(offscreen)
    return;
}
else{
    myCanvas.clearRect(playerX, playerY, -75, -75);
    playerX = playerX + velocityX;
    playerY = playerY + velocityY;
    myCanvas.fillRect(playerX, playerY, -75, -75);
    requestAnimationFrame(offscreen)
    spawnPoint();
}
}
offscreen();
document.addEventListener('keydown', (event) => {
    if(event.key == 'w'){
        velocityY = -5
     }
     else if(event.key == 's'){
        velocityY = 5

    }
    else if(event.key == 'a'){
        velocityX = -5

        }
    else if(event.key == 'd'){
        velocityX = 5
        }})
document.addEventListener("keyup", (event) => {
    if(event.key == 'w'){
        velocityY = 0
    }
    else if(event.key == 's'){
        velocityY = 0
    }
    else if(event.key == 'a'){
        velocityX = 0
    }
    else if(event.key == 'd'){
        velocityX = 0
    }
});