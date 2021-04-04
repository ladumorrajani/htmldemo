/* Script on ready
---------------------------------*/	
$(document).ready(function(){
    $(".single-service .heading").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(200);
        }
        else {
            $(".single-service .heading").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
            .siblings(".content")
            .slideDown(200);
        }
    });      
});