import showPass from "./show-pass";
import fancybox from "./fancybox";
import rangeSlider from './range-slider';
import theme from './theme';
import scrollTo from "./scrollTo";
import tab from 'npm-kit-tab';
import toggle from 'npm-kit-toggle';
import ripple from 'npm-kit-ripple';
import scrollHeader from './scroll-header';
import dataHref from './data-href';
import yandexMap from './yandex-map';
import result from './result';
import scrolled from './scrolled';
import maskTel from './mask-tel';
import filter from './filter';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';

import '../scss/index.scss';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper
window.ripple = ripple
window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
	fancybox.init()
	showPass.init()
	scrollTo.init()
	rangeSlider.init()
	tab.init()
	toggle.init()
	ripple.init()
	theme.init()
	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')
	scrollHeader.init()
	dataHref.init()
	yandexMap.init()
	result.init()
	scrolled.init()
	maskTel.init()
	filter.init()

}