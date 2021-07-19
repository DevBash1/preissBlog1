onload=()=>{
function showAndHideSearch(){
  let show=true;
$("nav #searchMe").click(function(){
  if(show){
  $("#searchEnv").fadeIn(300);
  $(this).attr("class","fa fa-times");
  show=false;
  }
  else{
  $("#searchEnv").fadeOut(300);
  $(this).attr("class","fa fa-search");
show=true;
  }
});
$("#searchEnv").fadeOut(300);
}//search ui function ends

function showAndHideMenu(){
  let show=true;
$("nav #menu").click(function(){

  if(show){
  $("#menuContent").fadeIn(300);
  $("#menuContent #main").animate({width:"80%"},200);
  $(this).attr("class","fa fa-times");
  show=false;
  }
  else{
  $("#menuContent #main").animate({width:"0"},200);
  setTimeout(() => {
    $("#menuContent").fadeOut(0);
  }, 210);
  $(this).attr("class","fa fa-reorder");
 show=true;
  }
})
$("#menuContent").fadeOut(0);
$("#menuContent #main").css("width","0")
}//menu ui function ends

//topBlogs LinkExample
const topBlogs=[
  {"title":"7 Ways To Save Battery Life Of Android Phone",
"link":"#",
"image":"image/battery.jpg",
"admin":true,
"date":"july - 2020"
},

{"title":"7 Ways To Save Battery Life Of Android Phone",
"link":"#",
"image":"image/b1.jpg",
"admin":false,
"date":"july - 2020"},

{"title":"7 Ways To Save Battery Life Of Android Phone",
"link":"#",
"image":"image/b1.jpg",
"admin":false,
"date":"july - 2020"},

{"title":"7 Ways To Save Battery Life Of Android Phone",
"link":"#",
"image":"image/b1.jpg",
"admin":false,
"date":"july - 2020"},

];//its example

function showBlogs(arr=topBlogs){
  $("#topBlogs").html("");
  arr.forEach((e,i) => {
    
  $("#topBlogs").append(`
<div id="blogGroup"  style="background-image : url(''${e.image});"  index="${i}" class="flexBottom" onclick="href('${e.link}')">
<div class="flexBottom w3-padding w3-block" style="flex-wrap:wrap; width:100%; height:100%;background:linear-gradient(rgb(255, 255, 255),rgba(0, 0, 0, 0.6))">
<h2 class="w3-center w3-bold  w3-block" style="padding:0;"><br><br>
    ${e.title}
</h2>
<div class="flexStart w3-block">
<button class="fa fa-user-o" style='display:${e.admin=="true" || e.admin ? "":"none"}'> admin</button>
<button class="fa fa-clock"> ${e.date}</button></div>
<!--date here-->
</div>
</div>
  `);
});

}

showAndHideSearch();
showAndHideMenu();
showBlogs();
}//end onload

