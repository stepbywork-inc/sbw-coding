//ua判定
document.addEventListener('DOMContentLoaded', function () {
	smoothScroll();
})
window.addEventListener('load', function () {
	AOS.init({
		//offset: 300,
		// delay: 100,
		duration: 1000,
		once: true,
	});
})
window.addEventListener('scroll', function () {
});
function smoothScroll() {
	$('a[href^="#"]').click(function () {
		// スクロールの速度
		var speed = 500; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});
}