// NAVBAR
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
	const scrollTop =
		window.pageTOffset || this.document.documentElement.scrollTop;

	if (scrollTop > lastScrollTop) {
		navbar.style.top = '-50px';
	} else {
		navbar.style.top = '0';
	}
	lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed('.typed', {
	strings: [
		"Bonjour à tous et à toutes, je me présente je m'appelle Henry",
		"Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 15 métiers différents. J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 6 mois je me forme à temps plein en autodidacte aux langages Front tels que CSS, JavaScript et son Framework React afin de devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder.",
	],
	typeSpeed: 20,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {
	const top = $('.counter').offset().top - window.innerHeight;

	if (compteur == 0 && $(window).scrollTop() > top) {
		$('.counter-value').each(function () {
			let $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text(),
			}).animate(
				{
					countNum: countTo,
				},
				{
					duration: 10000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					},
				}
			);
		});
		compteur = 1;
	}
});

// AOS
AOS.init();
