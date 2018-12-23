var canMove = false
var popX = 0, popY = 0
pop.onmousedown = e =>{
    canMove = true;
    popX = e.offsetX
    popY = e.offsetY
}
window.onmousemove = e =>{
    if(canMove){
        pop.style.top = e.clientY-popY+"px"
        pop.style.left = e.clientX-popX+"px"
    }
}
pop.onmouseup=()=>canMove=false
