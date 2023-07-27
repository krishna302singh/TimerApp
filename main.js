var n=document.getElementById("num");
var min=document.getElementById("min");
var sec=document.getElementById("sec");

var s;
var m;
var i;
function start(){
    m=parseInt(n.value);
    s=0;
    min.innerHTML=m;
    sec.innerHTML=s;
    clearInterval(i);
    i=setInterval(function(){
        if(s!=0){
            s--;
            sec.innerHTML=s;
        }else{
            s=59;
            sec.innerHTML=s;
            m--;
            min.innerHTML=m;
        }
        if(m==0 && s==0){
            clearInterval(i);
        }
    },1000);
}
function stop(){
    clearInterval(i);
}
function resume(){
    clearInterval(i);
    i=setInterval(function(){
        if(s!=0){
            s--;
            sec.innerHTML=s;
        }else{
            s=59;
            sec.innerHTML=s;
            m--;
            min.innerHTML=m;
        }
        if(m==0 && s==0){
            clearInterval(i);
        }
    },1000);
}
function reset(){
    m=0;
    s=0;
    clearInterval(i);
    sec.innerHTML="00";
    min.innerHTML="00";
}