
var walesonc=0;
var allcc=0;

function ReloadData(){
 // window.location.reload();
  ProDet.getBasicInfo();
 // $(".my-tab li.J_pro_tab)").click();
 // document.execCommand('Refresh');
}

function StartAuto(){
  start=sessionStorage.getItem("ClickStart");
  walesonAddBtn=document.getElementById("waleson_auto_click");
  if(walesonAddBtn!=null){   
      if(start=="true"){
         sessionStorage.setItem("ClickStart", "false"); 
         walesonAddBtn.innerHTML="已停止自动抢单";          
      }else{
         ccc=prompt("请输入频率s","0.2");
         sessionStorage.setItem("freq", ccc*1000); 
         sessionStorage.setItem("ClickStart", "true");   
         walesonAddBtn.innerHTML="已开启自动抢单"; 
         window.location.reload();
      };
   };
   ReloadData();
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
    timeok=(h>=8&&m>1&&m<=60);
    if(timeok){       
      gClickBtn=document.getElementsByClassName("J_grab_single")[0];
      if (gClickBtn==null){
        ReloadData();
      }else{        
        wbtn=document.getElementById("waleson_auto_click");
        if (wbtn!=null){
          allcc+=100;
          if (allcc>=freq){
                wbtn.innerHTML="正在自动抢单"+walesonc+"次";
                walesonc+=1;
                gClickBtn.click();
                allcc=0;
          };

       }else{
        ReloadData();
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
setInterval("CheckClick()",100);
AddBtn();
