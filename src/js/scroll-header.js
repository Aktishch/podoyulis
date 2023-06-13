const init = () => {

	const header = document.querySelector('.-header-')

	if (!header) return

	const scrollHeader = () => {

		const currentScrollPos = window.pageYOffset
		const headerHeight = header.clientHeight / 2

		if (currentScrollPos > headerHeight) {
			header.classList.add('header--top')
		} else {
			header.classList.remove('header--top')
		}

	}

	document.addEventListener('scroll', scrollHeader)

}

export default { init }