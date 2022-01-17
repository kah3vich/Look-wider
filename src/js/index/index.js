let wow = new WOW({
	mobile: false,
});
wow.init();

let indexSlider = new Swiper(".indexSlider", {
	pagination: {
		el: ".slider__wrappers-slider .swiper-controls .swiper-pagination",
	},
	mousewheel: true,
	speed: 1200,
	parallax: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
});

const element = document.querySelector(
	".slider__wrappers-slider .swiper-slide-active .slider__wrappers-slider-title"
);
element.classList.add("animate__animated", "animate__fadeInUp");
element.style.setProperty("--animate-duration", "3s");

indexSlider.on("slideChange", () => {
	$(() => {
		const element = document.querySelector(
			".slider__wrappers-slider .swiper-slide-active .slider__wrappers-slider-title"
		);
		element.classList.add("animate__animated", "animate__fadeInUp");
		element.style.setProperty("--animate-duration", "1s");
	});
});

const text = baffle(".slider__wrappers-text-item");
text.set({
	characters: "●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎●○◉◎",
	speed: 100,
});
text.start();
text.reveal(2500);

TweenMax.to(".slider__wrappers-preloader", 2, {
	delay: 2.5,
	left: "-100%",
	ease: Expo.easeInOut,
});

TweenMax.to(".slider__wrappers-text-item", 2, {
	delay: 2.5,
	left: "50px",
	transform: "translate(0%, -50%)",
	ease: Expo.easeInOut,
});
