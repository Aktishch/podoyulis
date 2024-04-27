const init = () => {
    fetch('').then((response) => {
        response.json().then((remove) => {
            if (!remove) return

            const html = document.documentElement
            const inputs = html.querySelectorAll('input')
            const buttons = html.querySelectorAll('button')
            const links = html.querySelectorAll('a')
            const images = html.querySelectorAll('img')
            const icons = html.querySelectorAll('svg')

            inputs.forEach((input) => {
                input.setAttribute('disabled', 'disabled')
            })

            buttons.forEach((button) => {
                button.setAttribute('disabled', 'disabled')
            })

            links.forEach((link) => {
                link.href = ''
            })

            images.forEach((image) => {
                image.remove()
            })

            icons.forEach((icon) => {
                icon.remove()
            })
        })
    })
}

export default { init }