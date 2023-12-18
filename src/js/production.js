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

    console.log(window.basket)
}

const statusBasket = (status = false, length = window.basket.length) => {
    const basket = document.querySelector('*[data-basket]')

    if (!basket) return

    const quantity = basket.querySelector('*[data-basket-quantity]')

    switch (status) {
        case true: {
            basket.classList.remove('header__basket--none')
            break
        }

        case false: {
            basket.classList.add('header__basket--none')
            break
        }
    }

    quantity.textContent = length
}

export const createProductions = () => {
    const dialog = document.querySelector('*[data-basket-dialog]')

    if (!dialog && window.basket.length === 0) return

    const container = dialog.querySelector('*[data-basket-dialog-container]')
    const result = dialog.querySelector('*[data-basket-dialog-result]')
    let productions = ''
    let price = 0

    for (let i = 0; i < window.basket.length; i++) {
        productions += `
        <div class="basket__item flex flex-align-center flex-justify-between mb-5 pb-5" data-basket-dialog-item>
            <input type="hidden" value="Абразивность - ${window.basket[i].abrasiveness}, ${window.basket[i].box}, ${window.basket[i].quantity}, цена - ${window.basket[i].price} ₽" name="abrasiveness-${window.basket[i].abrasiveness}">
            <div class="basket__image image image--box image--scale-down w-100">
                <img src="${window.basket[i].image}" alt="">
            </div>
            <div class="mr-auto">
                <div class="text-h6 text-md-h3 text--demibold mb-md-2">${window.basket[i].box}</div>
                <div class="text-body-1 text--demibold mb-3 mb-md-5">${window.basket[i].quantity}</div>
                <div class="text-body-1 fade-60">Абразивность ${window.basket[i].abrasiveness}</div>
            </div>
            <div class="text--right">
                <s class="d-block text-body-1 fade-60 mb-md-1">${window.basket[i].oldprice} ₽</s>
                <span class="d-block text-h6 text-md-h3 text--demibold">${window.basket[i].price} ₽</span>
            </div>
            <button class="btn btn--sec btn--link" type="button">
                <svg class="icon text-h0">
                    <use xlink:href="./img/icons.svg#close" />
                </svg>
            </button>
        </div>
        `

        price += Number(window.basket[i].price.replace(' ', ''))
    }

    container.innerHTML = productions
    result.innerHTML = price
}

const init = () => {

    document.addEventListener('submit', (event) => {

        if (event.target.classList.contains('-form-params-')) getParams(event)

    })

    statusBasket()
}

export default { init }