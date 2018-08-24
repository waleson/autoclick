var walesonc=0;

function StartAuto(){
  start=sessionStorage.getItem("ClickStart");
  if(start=="true"){
    sessionStorage.setItem("ClickStart", "false");    
  }else{
    ccc=prompt("请输入频率s","0.2");
    sessionStorage.setItem("freq", ccc*1000); 
    sessionStorage.setItem("ClickStart", "true");    
  }
  walesonAddBtn=document.getElementById("waleson_auto_click");
  if(walesonAddBtn!=null){
      if(start=="false"){
         walesonAddBtn.innerHTML="已停止自动抢单";  
      }else{
         walesonAddBtn.innerHTML="已开启自动抢单"; 
      };
   };
   window.location.reload();
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
      gClickBtn=document.getElementsByClassName("J_grab_single")[0];
      if (gClickBtn==null){
        window.location.reload();
      }else{        
        wbtn=document.getElementById("waleson_auto_click");
        if (wbtn!=null){
        wbtn.innerHTML="正在自动抢单"+walesonc+"次";
        walesonc+=1;
        gClickBtn.click();
       }else{
        window.location.reload();
       }
      }  
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
  gwaleson=document.getElementsByClassName("pro-get-button-box")[0];
  gwaleson.appendChild(br)
  gwaleson.appendChild(abtn); 
}

var freq=sessionStorage.getItem("freq");
if(freq==""){freq=200};
setInterval("CheckClick()",freq);
AddBtn();
