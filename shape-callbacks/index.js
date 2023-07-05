const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.beginPath();
ctx.rect(100,100,100,100);
//ctx.fill();
ctx.stroke();

canvas.addEventListener("click", (e)=>{
    ctx.beginPath();
    const w = 50;
    ctx.rect(e.x-w/2,e.y-w/2,w,w);
    //ctx.fill();
    ctx.stroke();
});

canvas.addEventListener("mousemove", (e)=>{
    ctx.beginPath();
    ctx.arc(e.x,e.y,10,0,2*Math.PI);
    ctx.fill();
});

