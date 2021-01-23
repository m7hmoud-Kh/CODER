$(function(){


     $("body").niceScroll({
           
        cursorcolor: "var(--main-color)"
 
     });

 $(".timer").countTo();
 

  $(".back").height($(window).height());
  
    $(window).scroll(function(){
      if(pageYOffset > 1160)
      {
        $(".psd .pro span").animate({
            
            width: "75%",
        },1000);

        $(".HTML .pro span").animate({
            width: "90%",
        },1000);
        
        $(".JAVASCRIPT .pro span").animate({
            width: "80%",
        },1000);
    
        $(".WORDPRESS .pro span").animate({
            width: "65%",
        },1000);

      }
    });

    let placehlder =  $("input").attr("placeholder");

    $("input").focus(function(){
     
         $(this).attr("placeholder","")
    });

   $("input").blur(function(){
  
    $(this).attr("placeholder",placehlder);

   });


   let placehlderte =  $("textarea").attr("placeholder");

    $("textarea").focus(function(){
     
         $(this).attr("placeholder","")
    });

   $("textarea").blur(function(){
  
    $(this).attr("placeholder",placehlderte);

   });

    $("ul li").click(function(){

       let attr = $(this).data("scroll");

       $("html , body").animate({
        
        scrollTop: $(attr).offset().top
        
       },1000);

    });

    $(window).scroll(function(){

        if(pageYOffset >= 803)
        {
            $(".scroll").css({
               display : "block"
            });
        }

        if(pageYOffset <= 600)
        {
            $(".scroll").css({
               display : "none"
            });
        }


    });

     $(".scroll").click(function(){

         $("html ,body").animate({
              
            scrollTop : 0
        },1000);     

     });

     $(".bar").click(function(){
          
        $(".bar ul").toggle("none");
        console.log("hello")

     });

     $("h1").fitText({
         maxSize:"80px"
     })


});