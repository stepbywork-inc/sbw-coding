//ua判定
document.addEventListener('DOMContentLoaded', function () {
	AOS.init({
		//offset: 300,
		// delay: 100,
		duration: 1000,
		once: true,
	});
})
window.addEventListener('load', function () {
	AOS.refresh();
})
window.addEventListener('scroll', function () {
});
function smoothScroll() {
	$('[href^="#"]').click(function(){
		var headerHeight = $('.js-hdr').outerHeight()
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({ scrollTop: position }, 500);
		return false;
	});
}
function pagetop() {
  $('.js-pagetop').hide();
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.js-pagetop').fadeIn(300);
    } else {
      $('.js-pagetop').fadeOut(300);
    }

    // 指定位置で止めたい場合
    // var scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
    // var stopPosition = $('#footer').offset().top; //止めたい位置

    // if (scrollPosition >= stopPosition) {
    //   $('.js-pagetop').addClass('is-absolute');
    // } else {
    //   $('.js-pagetop').removeClass('is-absolute');
    // }
  });
}