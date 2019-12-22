

const canvas = document.getElementById('canvas_p');
const ctx = canvas.getContext('2d');



if(window.innerWidth > window.innerHeight){
  canvas.width = window.innerHeight*0.6;
  canvas.height = window.innerHeight*0.6;
}else {
  canvas.width = window.innerWidth*0.6;
  canvas.height = window.innerWidth*0.6;
}


let canvas_h = canvas.height;
let canvas_w = canvas.width;


let box = [10,10];
let v_box = [2,2];


let p_x = canvas_w/2;
let p_y = canvas_h/2;
let p_r = canvas_h/10;


let theta = 0;
let servo = theta+90;
let angleRad = 0;

let K = 10;


function loop(timestamp) {
  //clear window
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  servo %= 360;
  servo += 0.01*(theta-servo)*K;


  angleRad = Math.PI/ 180*servo;




  //back circle
  ctx.beginPath();
  ctx.fillStyle = "#3c446b";
  ctx.arc(p_x, p_y, p_r*Math.sqrt(2), 0, 2*Math.PI);
  ctx.fill();

  ctx.save();
  //rotate box
  ctx.translate(p_x, p_y);
  ctx.rotate(angleRad);
  ctx.translate(-p_x, -p_y);
  ctx.fillStyle = "#122069";
  ctx.fillRect(p_x-7, p_y-p_r*1.7, 14, p_r*1.7);
  ctx.restore();




  ctx.save();
  ctx.translate(p_x, p_y);
  ctx.rotate(Math.PI/ 180*theta);
  ctx.translate(-p_x, -p_y);
  //around pin
  ctx.fillStyle = "#d22e0b";
  ctx.fillRect(p_x, p_y-p_r*3, 1, p_r);

  ctx.restore();




  //center circle
  ctx.beginPath();
  ctx.fillStyle = "#122069";
  ctx.arc(p_x, p_y, p_r*Math.sqrt(2)/3, 0, 2*Math.PI);
  ctx.fill();

  //around circle
  ctx.beginPath();
  ctx.arc(p_x, p_y, 3*p_r, 0, 2*Math.PI);
  ctx.stroke();

  window.requestAnimationFrame(loop);
}


window.requestAnimationFrame(loop);



function change_angle(){
  window.cancelAnimationFrame(loop);
  theta = parseFloat(document.getElementById("angle").value);
  theta %= 360;
  window.requestAnimationFrame(loop);
}
