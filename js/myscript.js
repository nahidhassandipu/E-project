$(document).ready(function(){
    $("div.mini-card", this).mousedown(function(event){
        $(".Biker_default-caption .row", this).hide();
        $(".Biker_default-caption .row:last-child", this).show();
    });
    $("div.mini-card", this).mouseleave(function(event){
        $(".Biker_default-caption .row", this).show();
        $(".Biker_default-caption .row:last-child", this).hide();
    });
    $('.element').on('mouseover mouseenter mouseleave mouseup mousedown',function(){
        return false
    });
    function myFunction(xox) {
        $(xox).mousedown(function(){
            $(this).prevAll("li").removeClass("fa fa-star-o");
            $(this).prevAll("li").addClass("fa fa-star");
            $(this).removeClass("fa fa-star-o");
            $(this).addClass("fa fa-star");
            $(xox).mouseout(function(){
              return $(this).mousedown(); 
            });
            $(xox).addClass("element");
        });
        $(xox).mouseover(function(){
            $(this).prevAll("li").removeClass("fa fa-star-o");
            $(this).prevAll("li").addClass("fa fa-star");
            $(this).removeClass("fa fa-star-o");
            $(this).addClass("fa fa-star");
        });
        $(xox).mouseout(function(){
            $(this).prevAll("li").removeClass("fa fa-star");
            $(this).prevAll("li").addClass("fa fa-star-o");
            $(this).removeClass("fa fa-star");
            $(this).addClass("fa fa-star-o");
        });
    }
    myFunction(".change-icon-replace-a ul li");
    myFunction(".change-icon-replace-b ul li");
    myFunction(".change-icon-replace-c ul li");
    myFunction(".change-icon-replace-d ul li");
    myFunction(".change-icon-replace-e ul li");
    myFunction(".change-icon-replace-f ul li");
    $(".wow", this).click(function(){
        var getImage = $(this).attr('src');
        $("#myImage").attr("src", getImage);
        window.open("#navId", "_self");
    });
    if ($("img.indexwow").click()) {
        $("#myImage").attr("src", localStorage.myImg); 
    }
    var count = 1;
    
    $("button.increaseButton").click(function() {
        count += 1;
        $('input[name="co"]').val(count);
    });
    $("button.decreaseButton").click(function() {
        count -= 1;
        $('input[name="co"]').val(count);
        if(count < 1) {
            count = 0; 
            $('input[name="co"]').val(0);
        }
    });
    
});