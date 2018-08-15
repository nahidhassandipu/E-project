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
    var getImg, title;
    $("img.indexwow").click(function(){
        getImg = $(this).attr('src');
        title = $(this).parents(".thumbnail").find("strong.rebock-title").html();
        $(this).attr("data-toggle", 'modal');
        $(this).attr("data-target", '#myModal');
        $("div.modal-body").html("<img id='ourModel' src=" + getImg + ">");
        $("h4.modal-title").html(title);
    });
    $("div.hover-caption i.fa-shopping-cart").click(function() {
        getImg = $(this).parents("div.hover-caption").siblings('img.indexwow').attr('src');
        title = $(this).parents(".thumbnail").find("strong.rebock-title").html();
        $(this).attr("data-toggle", 'modal');
        $(this).attr("data-target", '#myModal');
        $("div.modal-body").html("<img id='ourModel' src=" + getImg + ">");
        $("h4.modal-title").html(title);
    });
    $("b.index-add-cart").click(function() {
        getImg = $(this).parents("div.Biker_default-caption").siblings("div").find("img.indexwow").attr("src");
        title = $(this).parents(".thumbnail").find("strong.rebock-title").html();
        $(this).attr("data-toggle", 'modal');
        $(this).attr("data-target", '#myModal');
        $("div.modal-body").html("<img id='ourModel' src=" + getImg + ">");
        $("h4.modal-title").html(title);
    });
    if ($("button#getProductpage").click()) { 
        $("#myImage").attr("src", localStorage.getItem("ourImage"));
    }
    $(".wow", this).click(function(){
        var getImage = $(this).attr('src');
        $("#myImage").attr("src", getImage);
        window.open("#navId", "_self");
    });
    $("div.product-hover-caption > i.fa-shopping-cart").click(function() {
        var productImg = $(this).parent("div.product-hover-caption", this)
        .siblings('img.wow', this).attr('src');
        $("#myImage").attr("src", productImg);
        window.open("#navId", "_self");
    });
    $("b.add-cart").click(function() {
        var getImgaddcart = $(this).parents("div.Biker_default-caption", this)
        .siblings("div", this).find("img.wow").attr("src");
        $("#myImage").attr("src", getImgaddcart);
        window.open("#navId", "_self");
    });
    $("button.order-button").click(function() {
        if (count > 0 && $("div#choose-size i").hasClass('size-color')) {
            $(this).attr('data-target', '#orderModel');
            var getOrderImage = $("#myImage").attr("src");
            var getSize = $("i.size-color").html();
            $("div#show-img > img").attr("src", getOrderImage);
            $("span.price-show").html($("input#range2").val() + "$");
            $("span.size-show").html(getSize);
            $("span.quantity-show").html(count);
            $("div#choose-size i").removeClass('size-color');
            $("div#choose-size").removeClass('element');
        } 
        else if (count > 0 && !$("div#choose-size i").hasClass('size-color')) {
            $(this).attr('data-target', '#orderAlert');
            $("div#modal-body").html("<h4>You haven't select any size of your product</h4>");
            $("div#choose-size i").removeClass('size-color');
            $("div#choose-size").removeClass('element');
        }
        else if (count < 1 && $("div#choose-size i").hasClass('size-color')) {
            $(this).attr('data-target', '#orderAlert');
            $("div#modal-body").html("<h4>You haven't select how much quantity you want</h4>");
            $("div#choose-size i").removeClass('size-color');
            $("div#choose-size").removeClass('element');
        }
        else {
            $(this).attr('data-target', '#orderAlert');
            $("div#modal-body").html("<h4>Please choose the size of your product and how much quantity you want</h4>");
            $("div#choose-size i").removeClass('size-color');
            $("div#choose-size").removeClass('element');
        }
    });
    $("div#choose-size i", this).click(function() {
        $(this).addClass('size-color');
        $("div#choose-size").addClass('element');
    });
    var count = 0;
    $("button.increaseButton").click(function() {
        count += 1;
        $('input[name="co"]').val(count);
        $("div.header-icon span.cart-input").css('display', 'block');
        $("div.header-icon span.cart-input").html(count); 
    });
    $("button.decreaseButton").click(function() {
        count -= 1;
        $('input[name="co"]').val(count);
        $("div.header-icon span.cart-input").html(count);
        if(count < 1) {
            count = 0; 
            $('input[name="co"]').val(0);
            $("div.header-icon span.cart-input").css('display', 'none');   
        }
    });
    if ($("div.header-icon span.cart-input").html(count) < 10) {
        $("div.header-icon span.cart-input").css('width', '20px');
    }
    if ($("div.header-icon span.cart-input").html(count) > 9) {
        $("div.header-icon span.cart-input").css('width', '30px');    
    }
    function rangeColor(input) {
        var wrp = document.createElement('div');
        var preBar = document.createElement('p');
        var valueShow = document.getElementById("demo");
        var getVal = function() {
            var val = input.clientWidth * input.value / input.max;
            valueShow.innerHTML = input.value + "$";
            if (input.value <= 20) {
                valueShow.innerHTML = 21 + "$";
                alert("Sorry but you cannot negotiate the price of this product below " + valueShow.innerHTML + " Thank you");
            }
            return val;
        };
        wrp.className = 'barCnt';
        preBar.className = 'preBar';
        input.className = 'colorized';
        input.parentNode.replaceChild(wrp, input);
        wrp.appendChild(input);
        wrp.appendChild(preBar);
        input.addEventListener('input', function() {
          preBar.style.width = getVal() + 'px';
        });
        preBar.style.width = getVal() + 'px';
    }
    rangeColor(document.getElementById('range2'));
});
