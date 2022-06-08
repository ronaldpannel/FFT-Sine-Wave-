/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let time = 0;
let radius = 100;
let wave = [];


function drawCircle() {
  
  ctx.save();
  ctx.translate(200, 200);
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();
  
  radius = 50 * (4 / (1 * Math.PI));
  let x = radius * Math.cos(1 * time);
  let y = radius * Math.sin(1 * time);
   wave.unshift(y)
 
 

  // Static Circle
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();
  //first Rotating Circle

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.stroke();

  //First line
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.translate(200, 0);
  ctx.beginPath();
  ctx.moveTo(x - 200, y);
  ctx.lineTo(0, wave[0]);
  ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i < wave.length; i++) {
    ctx.strokeStyle = "white";
    ctx.arc(i, wave[i], .5, 0, 2 * Math.PI);
    ctx.stroke();
  }
  ctx.restore();

  time += 0.09;

  if (wave.length > 250) {
    wave.pop();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  requestAnimationFrame(animate);
}

animate();
