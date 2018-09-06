
var walesonc=0;
var allcc=0;

function Initlabel(){
  start=sessionStorage.getItem("ClickStart");
  walesonAddBtn=document.getElementById("waleson_auto_click");
  if(walesonAddBtn!=null){   
      if(start=="true"){         
         walesonAddBtn.innerHTML="已开启自动抢单";          
      }else{
         walesonAddBtn.innerHTML="开始自动抢单"; 
      };
   };
}

function StartAuto(){  
  walesonAddBtn=document.getElementById("waleson_auto_click");
  if(walesonAddBtn!=null){   
      start=sessionStorage.getItem("ClickStart");
      if(start=="true"){
         sessionStorage.setItem("ClickStart", "false"); 
         walesonAddBtn.innerHTML="已停止自动抢单";          
      }else{
         ccc=prompt("请输入频率s","0.2");
         if(ccc!=null){
         freq=ccc*1000; 
         sessionStorage.setItem("freq", freq); 
         sessionStorage.setItem("ClickStart", "true");   
         walesonAddBtn.innerHTML="已开启自动抢单"; 
         }
      };
   }else{
    window.location.reload();   
   }
}


function CheckClick()
{
  start=sessionStorage.getItem("ClickStart");
  if(start=="true"){
    mydate=new Date();
    timeok=false;
    h=mydate.getHours();
    timeok=(h>=8);
    if(timeok){
        if (wbtn!=null){
          allcc+=50;
          if (allcc>=freq){
               if($(.J_grab_single).hasClass("j-ishost")){
                   grabSingle(ProDet.busId,"","",true);
               }else{
                   grabSingle(ProDet.busId);
               }
                wbtn.innerHTML="正在自动抢单"+walesonc+"次";
                walesonc+=1;                
                allcc=0;
          };          
         }else{          
          window.location.reload();          
        }       

    }    
  }
}

function AddBtn(){
  gwaleson=document.getElementsByClassName("pro-get-button-box")[0];
  if(gwaleson){
   br=document.createElement("br")
   abtn=document.createElement("a");
   abtn.innerHTML="开启自动抢单";
   abtn.setAttribute("class","btn btn-yellow btn-mid");
   abtn.setAttribute("id","waleson_auto_click");
   abtn.setAttribute("href", "javascript:StartAuto()");

   //gwaleson.appendChild(br)
   gwaleson.appendChild(abtn); 
  }
}
var start=false;
var freq=sessionStorage.getItem("freq");
if(freq==""){freq=200};
setInterval("CheckClick()",50);
//setInterval("ReloadData()",100);
AddBtn();
Initlabel();
