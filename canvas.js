onload = () => {
    // //네모 캔버스
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");
    // ctx.strokeRect(10, 10, 200, 150);
    // ctx.fillRect(50, 40, 120, 90);
    // ctx.clearRect(90,65,40,40);
    
    // 패스로 그리기
    ctx.beginPath();
    ctx.moveTo(60, 10);
    ctx.lineTo(110, 100);
    ctx.lineTo(10, 100);
    ctx.closePath();
    ctx.stroke();
    //삼각형 채우기
    ctx.beginPath();
    ctx.moveTo(60, 120);
    ctx.lineTo(110, 210);
    ctx.lineTo(10, 210);
    ctx.fill();
    //펜이동시키기
    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(200, 250);
    ctx.moveTo(150, 200);
    ctx.lineTo(250, 200);
    ctx.stroke();
    //원호 그리기
    //시계 방향
    ctx.beginPath();
    ctx.arc(200, 100, 80, 30 * Math.PI/180, 120 * Math.PI/180, false);
    ctx.stroke();
    //시계 반대 방향
    ctx.beginPath();
    ctx.arc(200, 100, 80, 30 * Math.PI/180, 120 * Math.PI/180, true);
    ctx.fill();
}