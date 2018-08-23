var start=false;
var g=document.getElementsByClassName("J_grab_single")[0];
function StartAuto(){
  start=true;
}

function CheckClick()
{
  if(start){
    mydate=new Date();
    timeok=false;
    h=mydate.getHours();
    m=mydate.getMinutes();
    s=mydate.getSeconds();
    timeok=(h>=10&&m>1&&m<=60);
    if(timeok){
      g.click();
    }    
  }
}

function AddBtn(){
  br=document.createElement("br")
	abtn=document.createElement("a");
  abtn.innerHTML="自动点击";
  abtn.setAttribute("href", "javascript:StartAuto()")
  g.appendChild(br)
	g.appendChild(abtn);	
}

setInterval("CheckClick()",100);
AddBtn();