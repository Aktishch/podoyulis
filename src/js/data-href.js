const anchorTransition = (event) => {

    event.preventDefault()

    const id = String(event.target.getAttribute('href'))
    const headerHeight = document.querySelector('.-header-').clientHeight / 2
    const scrollToBlock = document.querySelector(id)

    let elementPosition = scrollToBlock.getBoundingClientRect().top
    let offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({

        top: offsetPosition,
        behavior: 'smooth'

    })

}

const init = () => {

    document.addEventListener('click', (event) => {

        if (event.target.hasAttribute('data-href')) anchorTransition(event)

    })

}

export default { init }