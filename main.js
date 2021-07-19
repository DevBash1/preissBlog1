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
function showBlogs(arr=topBlogs){
  $("#topBlogs").html("");
  if(arr.length>5){
    arr=arr.slice(0,5);
  }
  arr.forEach((e,i) => {
    
  $("#topBlogs").append(`
<div id="blogGroup"  style="background-image : url('images/${e.image}');"  index="${i}" class="flexBottom" onclick="href('${e.link}')">
<div class="flexBottom w3-padding w3-block" style="flex-wrap:wrap; width:100%; height:100%;background:linear-gradient(rgba(255, 255, 255,0.3),rgba(0, 0, 0, 0.6))">
<h2 class="w3-center w3-bold  w3-block" style="padding:0;"><br>
    ${e.title.length>50 ? e.title.slice(0,50)+"...":e.title}
</h2>
<div class="flexStart w3-block">
<button class="fa fa-user-o" style='display:${e.admin=="true" || e.admin ? "":"none"}'> admin</button>
<button class="fa fa-clock"> ${e.date}</button></div>
<!--date here-->
</div>
</div>
  `);
});

}//show  blog ends


function showBlogsList(arr=topBlogs){//this function display the blog list almost all
  $("#mainListContent").html("");
  arr.forEach((e,i)=>{
   
    $("#mainListContent").append(`

  <div index="${i}" onclick="href('${e.link}')"  id="blogLink"class="flexBetween w3-block">
    <img id="pcOnly" src="images/${e.image}">
    <div id="blogLinkInfo" class="w3-container">
<h1>
 ${e.title}
  </h1>
<div id="date"><i class="fa fa-clock"> ${e.date}</i> ${ e.admin=="true" || e.admin ? " <i class='fa fa-user-o'></i> admin":"" }
<img id="mobileOnly" style="position:relative !important"  src="images/${e.image}">
  
</div>
<div style="color:dimgrey;">
${e.blogContent.length>50 ? e.blogContent.slice(0,50)+"....":e.blogContent} 
</div>   
    </div>
  </div>
`)
});
}

function fetchCommets(arr=topBlogs){//this function will fetch radom comments from all blogs
let cmt=[];
  const comments=arr.map((e,i)=>{
 cmt.push(e.comments[Math.floor(Math.random()*e.comments.length)])
 return e.comments.length>0
});
console.log(cmt);
return cmt;
}

function showSomeComments(arr=fetchCommets()){
 arr= arr.length>7 ? arr.slice(0,7):arr;
  $("#comments").html("");
  arr.forEach((e)=>{
$("#comments").append(`
<div id="person" class="flexBetween w3-block ">
<img src="images/${e.image}" alt="">
<div>
  <b>${e.name}</b><br>
  <span>${e.content}</span>
</div>
</div>
`)});
}

showAndHideSearch();
showAndHideMenu();
showBlogs();
showBlogsList();
showSomeComments();
setTimeout(() => {
  $("html,body,#bodyM").animate({scrollTop:5000},"fast");
},100);
}//end onload

