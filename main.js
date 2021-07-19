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



showAndHideSearch();
showAndHideMenu();
}//end onload

