$(function() {
     $('.back-top').hide();

     $(window).scroll(function() {
         if ($(window).scrollTop() > 100) {
             $('.back-top').fadeIn(1000);
         } else {
             $(".back-top").fadeOut(1000);
         }
     });

     $(".back-top").click(function() {
		$('html,body').animate({scrollTop: '0px'}, 400)
        return false; //防止默认事件行为
     })
 })