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
});

debug = true;