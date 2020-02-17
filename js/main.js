var tl = new TimelineMax({});

const enterEase = Power2.easeOut;
const exitEase = Power3.easeIn;
const backEase = Back.easeOut.config(2.7);

const easeBounce = Back.easeOut.config(3);
const bounceOut = Back.easeIn.config(3);


// tl.set("headline-1, #headline-2, #subhead, #background-wrapper", { scale: 0, transformOrigin: "50% 50%" })
tl.from("#background-wrapper, #logo", .5, { opacity: 0 }, "+=.5")
	.from("#headline-1", .2, { scale: 0, ease: enterEase, transformOrigin: "50% 50%" }, "+=.5")
	.to("#headline-1", 2, {}) // pause
	.to("#headline-1", .2, { scale: 0, ease: exitEase, })
	.from("#headline-2", .2, { scale: 0, ease: enterEase, transformOrigin: "50% 50%" })
	.to("#headline-2", .4, { y: -18, ease: backEase, transformOrigin: "50% 50%" })
	.from("#subhead", .2, { scale: 0, ease: enterEase, transformOrigin: "50% 50%" }, "-=0.2")
	.to("#cta-button, #cta-button-under ", .2, { scale: 1, ease: backEase })
	.to("#cta-text ", .2, { scale: 1, ease: backEase })
	.from("#restrictions", .2, { scale: 0, ease: enterEase })
	.add(TweenMax.to("#mask-shimmer", 6, { x: 800, ease: enterEase, repeat: -1 }, "-=1"));

tl.timeScale(1);



