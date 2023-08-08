
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const orange = document.getElementById('orange');
const startButton = document.getElementById('startButton');
let untillNextCircleTimmer = 5000;
let canvasWidth = 600;
let canvasHeight = 800;
let orangeHeight = 60;
let orangeWidth = 60;
let orangeCoordinatesY = Math.floor(Math.random() * (canvasHeight - orangeHeight));
let orangeCoordinatesX = Math.floor(Math.random() * (canvasWidth - orangeWidth));

canvas.width = canvasWidth;
canvas.height = canvasHeight;

canvas.onclick = function(e) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    if (
        mouseX >= orangeCoordinatesX  &&
        mouseX <= orangeCoordinatesX + orangeWidth &&
        mouseY >= orangeCoordinatesY &&
        mouseY <= orangeCoordinatesY + orangeHeight
    ) {
        orangeCoordinatesY = Math.floor(Math.random() * (canvasHeight - orangeHeight));
        orangeCoordinatesX = Math.floor(Math.random() * (canvasWidth - orangeWidth));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = canvasWidth;
        ctx.fillStyle = 'orange';
        ctx.drawImage(orange, orangeCoordinatesX, orangeCoordinatesY, orangeWidth, orangeHeight);
    }
};

startButton.addEventListener('click', () => {
    drawCircle();

    let intervalA = setInterval(drawCircle, 1);
    setTimeout(() => {
        clearInterval(intervalA);
        orangeCoordinatesY = Math.floor(Math.random() * (canvasHeight - orangeHeight));
        orangeCoordinatesX = Math.floor(Math.random() * (canvasWidth - orangeWidth));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 60000);
});

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvasWidth;
    ctx.fillStyle = 'orange';
    ctx.drawImage(orange, orangeCoordinatesX, orangeCoordinatesY, orangeWidth, orangeHeight);
}
    


 

    
        
    
