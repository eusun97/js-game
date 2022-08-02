// css 안쓰고 canvas 사용해서 js로만 

// canvas 세팅
let canvas; 
let ctx; 

canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")

canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas) // body에 canvas 붙이기

