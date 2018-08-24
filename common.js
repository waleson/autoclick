var walesonc=0;
var gwaleson=document.getElementsByClassName("pro-get-button-box")[0];
var gClickBtn=document.getElementsByClassName("J_grab_single")[0];

function StartAuto(){
  start=sessionStorage.getItem("ClickStart");
  if(start=="true"){
    sessionStorage.setItem("ClickStart", "false");
  }else{
    sessionStorage.setItem("ClickStart", "true");
  }
  walesonAddBtn=document.getElementById("waleson_auto_click");
  if(start=="false"){
     walesonAddBtn.innerHTML="已停止自动抢单";  
  }else{
     walesonAddBtn.innerHTML="已开启自动抢单";  
  };
}

function CheckClick()
{
  start=sessionStorage.getItem("ClickStart");
  if(start=="true"){
    mydate=new Date();
    timeok=false;
    h=mydate.getHours();
    m=mydate.getMinutes();
    s=mydate.getSeconds();
    timeok=(h>=9&&m>1&&m<=60);
    if(timeok){ 
      document.getElementById("waleson_auto_click").innerHTML="正在自动抢单"+walesonc+"次";
      walesonc+=1;
      gClickBtn.click();
    }    
  }
}

function AddBtn(){
  br=document.createElement("br")
  abtn=document.createElement("a");
  abtn.innerHTML="开启自动抢单";
  abtn.setAttribute("class","btn btn-yellow btn-mid");
  abtn.setAttribute("id","waleson_auto_click");
  abtn.setAttribute("href", "javascript:StartAuto()");
  gwaleson.appendChild(br)
  gwaleson.appendChild(abtn); 
}

function AutoRefresh(){
   start=sessionStorage.getItem("ClickStart");
   if(start=="true"){
    window.location.reload();
   };
}

setInterval("CheckClick()",200);
setInterval("AutoRefresh()",600);
AddBtn();
