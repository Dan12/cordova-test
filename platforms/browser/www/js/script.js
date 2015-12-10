$(document).ready(function(){
   $("#a_button").click(function(){
      $("#hidden_text").toggle(300); 
   });
   if(debug){
      setTimeout(function(){
         $(".listening").css("display","none");
         $(".received").css("display","inline-block");
      },2000);
   }
   
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   
   ctx.fillStyle = "red";
   ctx.fillRect(10,10,30,30);
});

debug = false;