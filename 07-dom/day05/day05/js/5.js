//定义开关变量
//定义鼠标相对于pop内的偏移量，暂时为0
var canMove=false,offsetX=0,offsetY=0;
pop.onmousedown=e=>{//当鼠标在pop上按下时
  canMove=true;//打开开关
  //记录鼠标相对于当前pop的偏移位置:
    //保存到offsetX和offsetY
  offsetX=e.offsetX; offsetY=e.offsetY;
}
window.onmousemove=e=>{//当鼠标在窗口内移动时
  if(canMove){//如果开关打开
    //计算并设置pop的top和left
      //left=clientX-offsetX
      //top=clientY-offsetY
    pop.style.left=e.clientX-offsetX+"px";
    pop.style.top=e.clientY-offsetY+"px";
  }
}
//当鼠标在pop上抬起时
pop.onmouseup=e=>canMove=false;
  //关闭开关