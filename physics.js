

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

let angleRad = 0;

let p_x = canvas_w/2;
let p_y = canvas_h/2;
let p_r = canvas_h/5;

function loop(timestamp) {
  //clear window
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  angleRad += 1 * Math.PI / 180;
  ctx.beginPath();
  ctx.fillStyle = "#3c446b";
  ctx.arc(p_x, p_y, p_r*Math.sqrt(2), 0, 2*Math.PI);
  ctx.fill();

  ctx.save();

  ctx.translate(p_x, p_y);
  ctx.rotate(angleRad*4);
  ctx.translate(-p_x, -p_y);
  ctx.fillStyle = "#465495";
  ctx.fillRect(p_x-p_r, p_y-p_r, p_r*2, p_r*2);

  ctx.restore();


  /*
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (box[0], box[1], 50, 50);
  ctx.fillStyle = "#edf11b";
  ctx.fillRect (30, 30, 110, 110);
  box[0]+=v_box[0],box[1]+=v_box[1];
  if(box[0] < 0 || box[0] > canvas_w-50) v_box[0]*=(-1);
  if(box[1] < 0 || box[1] > canvas_h-50) v_box[1]*=(-1);
  */



  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
