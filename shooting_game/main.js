// css 안쓰고 canvas 사용해서 js로만 

// canvas 세팅
let canvas; 
let ctx; 

canvas = document.createElement("canvas")
ctx = canvas.getContext("2d") 

canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas) // body에 canvas 붙이기

// 이미지 가져오기
let backgroundImage, bulletImage, enemyImage, gameoverImage, roketImage;
function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src="images/background.png";

    bulletImage = new Image();
    bulletImage.src="images/bullet.png";

    enemyImage = new Image();
    enemyImage.src="images/enemy.png";

    gameoverImage = new Image();
    gameoverImage.src="images/gameover.png";

    roketImage = new Image();
    roketImage.src="images/roket.png";
}

// 이미지 보여주기 (image, x, y, dWidth, dHeight)
function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

// 함수 호출
// render함수를 main함수에 넣고 계속 호출해서 보여주기
function main() {
    render()
    requestAnimationFrame(main)
}

loadImage();
render();
main();