$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('#nav').addClass("sticky");
        }else{
            $('#nav').removeClass("sticky");
        }
        
    });

    $('#menu-btn').click(function(){
        $('#nav ul').toggleClass("active");
        $('#menu-btn i').toggleClass("active");
    });

});