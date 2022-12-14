const offset = (item) => {

	const top = item.getBoundingClientRect().top
	const left = item.getBoundingClientRect().left
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

	const coordinates = {

		top: top + scrollTop,
		left: left + scrollLeft

	}

	return coordinates

}

const animationOnScroll = () => {

	const items = document.querySelectorAll('.-scroll-')

	items.forEach(item => {

		const itemHeight = item.offsetHeight
		const itemOffsetTop = offset(item).top
		const screenPosition = 4

		let point = window.innerHeight - itemHeight / screenPosition

		if (point > window.innerHeight) point = window.innerHeight - window.innerHeight / screenPosition

		if (window.pageYOffset > itemOffsetTop - point && window.pageYOffset < itemOffsetTop + itemHeight) item.classList.add('-show-')

	})

}

const init = () => {

	animationOnScroll()

	document.addEventListener('scroll', animationOnScroll)

}

export default { init }