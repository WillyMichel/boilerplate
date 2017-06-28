$(document).ready(function(){
    // MENU MOBILE
    var $menuContainer = $(".headerMain__menu")
    ,   $menuList = $(".headerMain__menuInner")
    ,   $subMenuBtn = $(".showSubMenu");
    $(".header__toggleMenu").on("click", function(){
        var $this = $(this);
        if($this.hasClass("active")){
            $this.removeClass("active");
            setTimeout(function(){
                $menuContainer.removeClass("active");
            }, 200);
            $menuList.removeClass("active");
        } else {
            $this.addClass("active");
            $menuContainer.addClass("active");
            setTimeout(function(){
                $menuList.addClass("active");
            }, 200);
        }
    });
    $subMenuBtn.on("click", function(){
        var $this = $(this)
        ,   $subMenu = $this.siblings(".sub-menu");
        if($this.hasClass("active")){
            $this.removeClass("active");
            $subMenu.slideUp();
        } else {
            $this.addClass("active");
            $subMenu.slideDown();
        }
    });
});