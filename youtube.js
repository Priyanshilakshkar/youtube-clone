var menuicon= document.querySelector(".menu");
var sidebar = document.querySelector(".left2");
var maincontainer=document.querySelector(".center");
var largecard=document.querySelector(".card")


menuicon.onclick= function(params) {
    sidebar.classList.toggle("smaller-left");
    maincontainer.classList.toggle("center2");
    largecard.classList.toggle("large-card");
    
}