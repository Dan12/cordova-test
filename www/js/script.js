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
   ctx = canvas.getContext("2d");
   
   redraw();
   
   setInterval(function(){
      redraw();
   },20);
   
   $("#myCanvas").click(function(){
      r++;
      if(r>4)
         r = 1;
      if(r == 1){
         xvel = 1;
         yvel = 0;
      }
      
      if(r == 2){
         xvel = 0;
         yvel = 1;
      }
      
      if(r == 3){
         xvel = -1;
         yvel = 0;
      }
      
      if(r == 4){
         xvel = 0;
         yvel = -1;
      }
   });
});

function redraw(){
   ctx.clearRect(0,0,200,200);
   x+=xvel;
   y+=yvel;
   if(x < 0){
      r = 1;
      x = 0;
      xvel = 1;
      yvel = 0;
   }
   if(x > 200-30){
      r = 3;
      x = 200-30;
      xvel = -1;
      yvel = 0;
   }
   if(y < 0){
      r = 2;
      y = 0;
      xvel = 0;
      yvel = 1;
   }
   if(y > 200-30){
      r = 4;
      y = 200-30;
      xvel = 0;
      yvel = -1;
   }
   ctx.fillStyle = "red";
   ctx.fillRect(x,y,30,30);  
}

x = 10;
y = 10;
xvel = 1;
yvel = 0;
r = 1;
debug = false;
ctx = null;