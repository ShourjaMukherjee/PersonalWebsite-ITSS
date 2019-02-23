
var clicks=localStorage.getItem('likes');
if (isNaN(clicks))
    clicks=0;
function clickFunction(){
    console.log(clicks)
    clicks++;
    document.getElementById("clickcount").innerHTML="LIKES:"+clicks;
    localStorage.setItem('likes',clicks);
}

$(document).ready(function(){
    document.getElementById("clickcount").innerHTML="LIKES:"+clicks;
    $("#navbar").css("position","fixed");
});
