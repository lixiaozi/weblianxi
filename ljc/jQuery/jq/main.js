$.fn.extend({ 
    fellow:function(){ 
        $(this).append( 
            ' <button id="login">登录</button>'+ 
            '<div class="bar">'+ 
                '<div class="box">'+ 
                    '<div class="head">login'+ 
                        ' <span>X</span>'+ ' </div>'+ 
                        ' <div class="content">123 </div>'+ 
                        '</div>'+ 
                        ' </div>'
                         )
    $("#login").on("click", function() {
       $(".bar").css("display", "block")
  })
   $("span").on("click", function() {
    $(".bar").css("display", "none")
  })
 } 
})