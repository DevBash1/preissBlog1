function showBlogContent(content="<h>No Content</h1>"){
 
$("#blogContent").html(content);
}

onload=()=>{
 let blogId=localStorage.getItem("blogId");//blog user click  wants to view

if(blogId==null || blogId==undefined){
blogId=Math.floor(Math.random()*topBlogs.length);
}

 const blogToview=topBlogs[blogId];
 $("#blogHeading").html(blogToview.title)
$("#blogInfo #date").html(blogToview.date);
$("#blogInfo #Admin").html(blogToview.admin=="true"|| blogToview? "Admin":"");
console.log(blogToview)
showAndHideSearch();
showAndHideMenu();
 //showBlogs();
 showBlogContent(blogToview.blogContent);
showBlogsList(topBlogs.splice(0,4),'../');
showSomeComments((blogToview.comments),"../");
}