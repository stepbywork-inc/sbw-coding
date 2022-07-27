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
