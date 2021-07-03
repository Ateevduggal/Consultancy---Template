$(document).ready(function(){
    $("#card1").hover(function(){
        $("#card1").css({"background-color":"#17022c","color":"white"});
        $(".fa-hourglass-end").css({"background-color":"white","color":"#17022c"})
    }, function(){
        $(".fa-hourglass-end").css({"background-color":"#17022c","color":"white"});
        $("#card1").css({"background-color":"white","color":"#17022c"})
    });
    $("#card2").hover(function(){
        $("#card2").css({"background-color":"#99d9ae","color":"black"});
        $(".fa-stack-overflow").css({"background-color":"white","color":"#99d9ae"})
    }, function(){
        $(".fa-stack-overflow").css({"background-color":"#99d9ae","color":"white"});
        $("#card2").css({"background-color":"white","color":"black"})
    });
    $("#card3").hover(function(){
        $("#card3").css({"background-color":"#17022c","color":"white"});
        $(".fa-globe-asia").css({"background-color":"white","color":"#17022c"})
    }, function(){
        $(".fa-globe-asia").css({"background-color":"#17022c","color":"white"});
        $("#card3").css({"background-color":"white","color":"#17022c"})
    });
    $("#card4").hover(function(){
        $("#card4").css({"background-color":"#99d9ae","color":"black"});
        $(".fa-id-card-alt").css({"background-color":"white","color":"#99d9ae"});
    }, function(){
        $(".fa-id-card-alt").css({"background-color":"#99d9ae","color":"white"});
        $("#card4").css({"background-color":"white","color":"black"});
    });
    $("#btn-1").hover(function(){
        $("#btn-1").css({"background-color":"#17022c"});
        $(".btn-1").css({"color":"#99d9ae"});
    }, function(){
        $(".btn-1").css({"color":"#17022c"});
        $("#btn-1").css({"background-color":"#99d9ae"});
    });
    $("#btn1").hover(function(){
        $("#btn1").css({"background-color":"#17022c"});
        $(".btn1").css({"color":"#99d9ae"});
    }, function(){
        $(".btn1").css({"color":"#17022c"});
        $("#btn1").css({"background-color":"#99d9ae"});
    });
    $("#btn2").hover(function(){
        $("#btn2").css({"background-color":"#99d9ae"});
        $(".btn2").css({"color":"#17022c"});
    }, function(){
        $(".btn2").css({"color":"#99d9ae"});
        $("#btn2").css({"background-color":"#17022c"});
    });
})