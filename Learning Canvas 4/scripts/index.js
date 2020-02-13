let myCanvas = document.getElementById('myCanvas');

myCanvas.style = 'width: 500px; height: 500px; display: block; margin: 50px auto; border: 2px solid #ccc';

let context = myCanvas.getContext('2d');

context.font = '60px Courier New';

context.fillStyle = 'red';

context.fillText('M', 10, 40);

context.font = '50px Courier New';

context.fillStyle = 'blue';

context.fillText('A', 35, 60);

context.font = '40px Courier New';

context.fillStyle = 'purple';

context.fillText('H', 50, 80);

context.font = '30px Courier New';

context.fillStyle = 'green';

context.fillText('E', 65, 90);

context.font = '25px Courier New';

context.fillStyle = 'yellow';

context.fillText('R', 80, 100);

context.font = '60px Arial';

context.strokeStyle = '#f1f';

context.strokeText('Emad', 100, 120);