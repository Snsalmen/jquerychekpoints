

$(".imgk").hover(function(){
    $(this).css("opacity",0.5);
    $(this).find("button").show();
},function(){
    $(this).css("opacity",1);
    $(this).find("button").hide();
})
