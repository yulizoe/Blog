
<!--//--><![CDATA[//><!--
//ͼƬ�����б� mengjia 070816
var Speed = 1; //�ٶ�(����)
var Space = 20; //ÿ���ƶ�(px)
var PageWidth = 1140; //��ҳ���
var fill = 0; //������λ
var MoveLock = false;
var MoveTimeObj;
var Comp = 0;
var AutoPlayObj = null;
GetObj("List2").innerHTML = GetObj("List1").innerHTML;
GetObj('ISL_Cont').scrollLeft = fill;
GetObj("ISL_Cont").onmouseover = function(){clearInterval(AutoPlayObj);}
GetObj("ISL_Cont").onmouseout = function(){AutoPlay();}
AutoPlay();
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay(){ //�Զ�����
 clearInterval(AutoPlayObj);
 AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();',3000); //���ʱ��
}
function ISL_GoUp(){ //�Ϸ���ʼ
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 MoveTimeObj = setInterval('ISL_ScrUp();',Speed);
}
function ISL_StopUp(){ //�Ϸ�ֹͣ
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0){
  Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrUp(){ //�Ϸ�����
 if(GetObj('ISL_Cont').scrollLeft <= 0){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth}
 GetObj('ISL_Cont').scrollLeft -= Space ;
}
function ISL_GoDown(){ //�·�
 clearInterval(MoveTimeObj);
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 ISL_ScrDown();
 MoveTimeObj = setInterval('ISL_ScrDown()',Speed);
}
function ISL_StopDown(){ //�·�ֹͣ
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0 ){
  Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrDown(){ //�·�����
 if(GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth;}
 GetObj('ISL_Cont').scrollLeft += Space ;
}
function CompScr(){
 var num;
 if(Comp == 0){MoveLock = false;return;}
 if(Comp < 0){ //�Ϸ�
  if(Comp < -Space){
   Comp += Space;
   num = Space;
  }else{
   num = -Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft -= num;
  setTimeout('CompScr()',Speed);
 }else{ //�·�
  if(Comp > Space){
   Comp -= Space;
   num = Space;
  }else{
   num = Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft += num;
  setTimeout('CompScr()',Speed);
 }
}




 //���Ұ�ť

      GetObj('mark_left').onmouseover=oMarkLeft.onmouseover=function ()
      {
      startMove(GetObj('mark_left'),'opacity',100);
      
      };
       GetObj('mark_left').onmouseout=oMarkLeft.onmouseout=function ()
      {
      startMove(GetObj('mark_left'),'opacity',0);
      
      };
      oBtnNext.onmouseover=oMarkRight.onmouseover=function ()
      {
      startMove(oBtnNext,'opacity',100);
      
      };
       oBtnNext.onmouseout=oMarkRight.onmouseout=function ()
      {
      startMove(oBtnNext,'opacity',0);
      
      };



//���Ұ�ť����ʾ������
function showmark_left(){
  GetObj('dirl').style.opacity=100;
}

function hidemark_left(){
  GetObj('dirl').style.opacity=0;
}



function showmark_right(){
  GetObj('dirr').style.opacity=100;
}

function hidemark_right(){
  GetObj('dirr').style.opacity=0;
}
