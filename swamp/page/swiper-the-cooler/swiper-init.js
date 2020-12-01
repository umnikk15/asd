var swiper = new Swiper('.swiper-container', {
	//стрелки
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//навигация
	//булеты, текущее положение, прогрессбар
	pagination:{
		el: '.swiper-pagination',
		//булеты
		clickable: true,
		// уменьшает булеты
		dynamicBullets: true
	},
	scrollbar:{
		el: '.swiper-scrollbar',
	draggable: true
	},
	grabCursor: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	mousewheel:{
		sensitivity: 1,
	},
	freeMode: true,

});