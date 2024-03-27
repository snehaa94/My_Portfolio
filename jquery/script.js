$(function(){
    $("#menu").slicknav({
        label:"",
        brand:"Sneha Kashyap"
    });
});

//images code
$(document).ready(function() {
    $(".skitter-large").skitter({
        dots:false,
        navigation:true
    });
});

//
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }
    });
});

$(document).ready(function(){
    $(".progress_bar-html").animate({"width":"70%"},1000,function(){
        $(".progress_bar-css").animate({"width":"60%"},1000,function(){
            $(".progress_bar-js").animate({"width":"55%"},1000,function(){
                $(".progress_bar-sql").animate({"width":"65%"},1000,function(){
                    $(".progress_bar-python").animate({"width":"90%"},1000,function(){
                        $(".progress_bar-jquery").animate({"width":"80%"},1000,function(){
                            $(".progress_bar-bootstrap").animate({"width":"90%"},1000,function(){

                            });
                        });
                    });
                });
            });
        });
    });
});