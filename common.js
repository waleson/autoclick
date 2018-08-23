 
var start=false;
var gwaleson=document.getElementsByClassName("pro-get-button-box")[0];
var gClickBtn=document.getElementsByClassName("J_grab_single")[0];
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
      gClickBtn.click();
    }    
  }
}

function AddBtn(){
  br=document.createElement("br")
	abtn=document.createElement("a");
  abtn.innerHTML="开启自动抢单";
  abtn.setAttribute("class","btn btn-yellow btn-mid");
  abtn.setAttribute("href", "javascript:StartAuto()");
  gwaleson.appendChild(br)
	gwaleson.appendChild(abtn);	
}

setInterval("CheckClick()",200);
AddBtn();
