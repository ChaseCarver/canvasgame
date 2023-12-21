const canvas = document.getElementById("myCanvas");
const myCanvas = canvas.getContext("2d");
let points = 0
var pointsDisplay = document.getElementById("pointsDisplay")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
function int_round5(num)
{
    return Math.ceil(num/5)*5;
}
let playerY = (int_round5(canvas.height/2) - 37)
let playerX = (int_round5(canvas.width/2) - 37)
let velocityY = 0
let velocityX = 0
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
myCanvas.fillStyle = "#00000";
myCanvas.fillRect(playerX, playerY, 75, 75);
let pointPosX = ((getRandomInt(canvas.width - 140)) +75)
let pointPosY = ((getRandomInt(canvas.height - 140)) +75)
myCanvas.fillRect(pointPosX, pointPosY, 10, 10);
//if player X range is equal to point x range AND player Y range is equal to point Y range then HIT
let spawnPoint = () => {
if(pointPosX >= playerX && pointPosX <= playerX + 75 && pointPosY >= playerY && pointPosY <= playerY + 75 || pointPosX  + 10 >= playerX && pointPosX + 10 <= playerX + 75 && pointPosY + 10 >= playerY && pointPosY + 10 <= playerY + 75){
    console.log("HIT!")
    myCanvas.clearRect(pointPosX, pointPosY, 10, 10);
    pointPosX = ((getRandomInt(canvas.width - 140)) +75)
    pointPosY = ((getRandomInt(canvas.height - 140)) +75)
    //if point and point + 75 is within player y and player y +75 AND (same with x) 
    if(pointPosX >= playerX && pointPosX + 10 <= playerX + 75 && pointPosY >= playerY && pointPosY + 10 <= playerY + 75){
        spawnPoint();
        console.log("spawned inside square, respawning point.")
    }
    else{
    myCanvas.fillRect(pointPosX, pointPosY, 10, 10);
    points++
    pointsDisplay.textContent = points}
    return;
}else{return;}}
let offscreen = () => {if (playerY > canvas.height - 75|| playerY <= 0 || playerX> canvas.width - 75|| playerX <= 0){
    console.log("offscreen")
    myCanvas.clearRect(playerX, playerY, 75, 75);
    playerY = (int_round5(canvas.height/2) - 37)
    playerX = (int_round5(canvas.width/2) - 37)
    points = 0
    pointsDisplay.textContent = points
    velocityX = 0
    velocityY = 0
    alert("you died!")
    requestAnimationFrame(offscreen)
    return;
}
else{
    myCanvas.clearRect(playerX, playerY, 75, 75);
    playerX = playerX + velocityX;
    playerY = playerY + velocityY;
    myCanvas.fillRect(playerX, playerY, 75, 75);
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
document.getElementById("left").addEventListener("touchstart", function(){velocityX = -5})
document.getElementById("right").addEventListener("touchstart", function(){velocityX = 5})
document.getElementById("up").addEventListener("touchstart", function(){velocityY = -5})
document.getElementById("down").addEventListener("touchstart", function(){velocityY = 5})
document.addEventListener("touchend", function(){velocityX = 0, velocityY= 0})

document.getElementById("left").addEventListener("mousedown", function(){velocityX = -5})
document.getElementById("right").addEventListener("mousedown", function(){velocityX = 5})
document.getElementById("up").addEventListener("mousedown", function(){velocityY = -5})
document.getElementById("down").addEventListener("mousedown", function(){velocityY = 5})
document.addEventListener("mouseup", function(){velocityX = 0, velocityY= 0})