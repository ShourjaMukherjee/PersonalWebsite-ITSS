var ind_count=1;
var qat_count=1;
//LIKE COUNTER
var clicks=localStorage.getItem('likes');
if (isNaN(clicks))
    clicks=0;
document.getElementById("clickcount").innerHTML="LIKES:"+clicks; //sets up button with current number of likes
function clickFunction(){
    console.log(clicks)
    clicks++;
    document.getElementById("clickcount").innerHTML="LIKES:"+clicks;
    localStorage.setItem('likes',clicks);
}

//FIXED NAV BAR
$(document).ready(function(){
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

//INITIALIZING TABLE
var dict=localStorage.getItem('dict');
if (dict==null)
    dict={};
else {
    dict=JSON.parse(dict);
}
var count=localStorage.getItem('count');
if (isNaN(count))
    count=0;

document.getElementById("totalrows").innerHTML= "Total Rows:"+count; //merged table cells
//function to insert row
function myFunction(count) {
    var table = document.getElementById("myTable");
    console.log(count);
    var row = table.insertRow(count);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3= row.insertCell(2);
    var listtemp=dict[String(count)];
    cell1.innerHTML =listtemp["name"];
    cell2.innerHTML = listtemp["skill"];
    cell3.innerHTML= listtemp["proficiency"];
}
//initializes Table from stored value
function initializeTable(){
    for(var i=1;i<=count;i++){
        console.log(i);
        myFunction(i);
    }
}
initializeTable();

//TABLE STORAGE
function getdata(){
    count++;
    var name=document.getElementById("name").value;
    var skill=document.getElementById("skill").value;
    var proficiency=document.getElementById("proficiency").value;
    var list={"name":String(name),"skill":String(skill),"proficiency":String(proficiency)};
    dict[String(count)]=list;
    myFunction(count);
    localStorage.setItem('count',count);
    localStorage.removeItem('dict');
    localStorage.setItem('dict',JSON.stringify(dict));
    document.getElementById("totalrows").innerHTML= "Total Rows:"+count; //merged table cells
}

//Slideshow for India
function changepic_ind_prev() {
	ind_count = ind_count -1;
	if(ind_count < 1) {
		ind_count = 7;
	}
	str = "img/ind_"+ind_count+".jpg";
	document.getElementById("india").src = str;
}
function changepic_ind_next() {
	ind_count = ind_count +1;
	if(ind_count > 7) {
		ind_count = 1;
	}
	str = "img/ind_"+ind_count+".jpg";
	document.getElementById("india").src = str;
}

//Slideshow for Qatar
function changepic_qat_prev() {
	qat_count = qat_count -1;
	if(qat_count < 1) {
		qat_count = 6;
	}
	str = "img/qat_"+qat_count+".jpg";
	document.getElementById("qatar").src = str;
}
function changepic_qat_next() {
	qat_count = qat_count +1;
	if(qat_count > 6) {
		qat_count = 1;
	}
	str = "img/qat_"+qat_count+".jpg";
	document.getElementById("qatar").src = str;
}
