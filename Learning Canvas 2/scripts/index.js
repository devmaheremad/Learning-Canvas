let myCanvas = document.getElementById('my-canvas');

myCanvas.style = 'width: 600px; height: 400px;display: block; border: 2px solid #ccc; margin: 50px auto';

let myContext = myCanvas.getContext('2d');

myContext.fillStyle = 'purple';

myContext.fillRect(0, 0, 600, 400);

myContext.clearRect(100, 100, 100, 50);