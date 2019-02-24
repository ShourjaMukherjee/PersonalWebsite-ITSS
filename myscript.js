//LIKE COUNTER
var clicks=localStorage.getItem('likes');
if (isNaN(clicks))
    clicks=0;
function clickFunction(){
    console.log(clicks)
    clicks++;
    document.getElementById("clickcount").innerHTML="LIKES:"+clicks;
    localStorage.setItem('likes',clicks);
}

//FIXED NAV BAR
$(document).ready(function(){
    document.getElementById("clickcount").innerHTML="LIKES:"+clicks;
    $(".nav").css("position","fixed");
});

//NAVBAR HOVERING
$(document).ready(function(){
  $("li").hover(function(){
    $(this).css("background-color", "rgb(60,60,60)");
    }, function(){
    $(this).css("background-color", "black");
  });
});

//TABLE STORAGE
var dict=localStorage.getItem('dict');
if (dict==null)
    dict={};
else {
    dict=JSON.parse(dict);
}
var count=localStorage.getItem('count');
if (isNaN(count))
    count=0;
function getdata(){
    count++;
    var name=document.getElementById("name").value;
    var skill=document.getElementById("skill").value;
    var proficiency=document.getElementById("proficiency").value;
    var list={"name":String(name),"skill":String(skill),"proficiency":String(proficiency)};
    dict[String(count)]=list;
    /*
    var list={
        1:"[Bob,yoga,proficient]",
        2:"[Charlie,yoga,okayish]",
    }
    */

    //list[String(name)]=[skill,proficiency];

    /*
    var list = []; // create an empty array
    list.push({
        key:   String(name),
        value: [skill,proficiency]
    });
    */

    //list=JSON.stringify(list);
    //var info=JSON.parse(list);
    //console.log(info[1]);
    localStorage.setItem('count',count);
    localStorage.removeItem('dict');
    localStorage.setItem('dict',JSON.stringify(dict));
    console.log(dict["2"]);
    console.log(count);
}
