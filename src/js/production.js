import { statusBasket } from "./basket"

const getParams = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const searchParams = new URLSearchParams()
    const requestUrl = String(form.dataset.request)
    const submitBtn = form.querySelector('button[type="submit"]')
    const production = {}
    submitBtn.setAttribute('disabled', 'disabled')

    for (const pair of formData.entries()) {
        searchParams.append(pair[0], String(pair[1]))
        production[pair[0]] = String(pair[1])
    }

    const queryString = searchParams.toString()

    Fancybox.close()

    Fancybox.show([{

        src: `${requestUrl}?${queryString}`,
        type: 'ajax',
        dragToClose: false,
        mainClass: 'fancybox-custom-modal'

    }])

    submitBtn.removeAttribute('disabled')


    for (let i = 0; i < window.basket.length; i++) {
        if (production.abrasiveness === window.basket[i].abrasiveness) window.basket.splice(i, 1)
    }

    window.basket.push(production)

    statusBasket(window.basket.length !== 0)
}

const removeProduct = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const searchParams = new URLSearchParams()
    const requestUrl = String(form.dataset.request)
    const submitBtn = form.querySelector('button[type="submit"]')
    submitBtn.setAttribute('disabled', 'disabled')

    for (const pair of formData.entries()) {
        searchParams.append(pair[0], String(pair[1]))
    }

    const queryString = searchParams.toString()

    Fancybox.show([{

        src: `${requestUrl}?${queryString}`,
        type: 'ajax',
        dragToClose: false,
        mainClass: 'fancybox-custom-modal'

    }])

    submitBtn.removeAttribute('disabled')
}

const init = () => {
    document.addEventListener('submit', (event) => {

        if (event.target.classList.contains('-form-params-')) getParams(event)

        if (event.target.classList.contains('-form-product-remove-')) removeProduct(event)

    })
}

export default { init }