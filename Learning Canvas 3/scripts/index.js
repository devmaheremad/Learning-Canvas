let myCanvas = document.getElementById('mycanvas');

myCanvas.style = 'display: block; margin: 50px auto; border: 2px solid #ccc';

let context = myCanvas.getContext('2d');

let canvasWidth = myCanvas.width;

let canvasHeight = myCanvas.height;

context.fillStyle = '#eee';

context.fillRect(0, 0, canvasWidth, canvasHeight);

context.lineWidth = 5;

context.strokeStyle = '#f00';

// left Top Line

context.moveTo(10, 10);

context.lineTo(130, 130);

// Right Top Line

context.moveTo(canvasWidth - 10, 10);

context.lineTo(170, 130);

// Left Bottom Line

context.moveTo(10, canvasHeight - 10);

context.lineTo(130, 170);

// Right Bottom Line

context.moveTo(canvasWidth - 10, canvasHeight - 10);

context.lineTo(170, 170);

context.stroke();