let myCanvas = document.getElementById('mycanvas');

myCanvas.style = 'width: 600px; height: 400px; display: block; border: 2px solid #ccc; margin: 50px auto';

let myContext = myCanvas.getContext('2d');

myContext.fillStyle = '#191919';

myContext.fillRect(0, 0, 100, 50);

myContext.fillStyle = '#393939';

myContext.fillRect(100, 50, 100, 50);

myContext.fillStyle = '#595959';

myContext.fillRect(200, 100, 100, 50);

myContext.strokeStyle = 'green';

myContext.strokeRect(200, 0, 100, 50);

myContext.strokeStyle = 'red';

myContext.strokeRect(0, 100, 100, 50);