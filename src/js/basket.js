export const statusBasket = (status = false, length = window.basket.length) => {
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

export const createBasket = () => {
    const dialog = document.querySelector('*[data-basket-dialog]')

    if (!dialog && window.basket.length === 0) return

    const container = dialog.querySelector('*[data-basket-dialog-container]')
    const value = dialog.querySelector('*[data-basket-dialog-value]')
    const result = dialog.querySelector('*[data-basket-dialog-result]')
    const inputResult = dialog.querySelector('*[data-basket-dialog-input-result]')
    let productions = ''
    let inputs = ''
    let price = 0

    for (let i = 0; i < window.basket.length; i++) {
        productions += `
        <form class="-form-product-remove-" data-request="dialog-product-remove.php">
            <input type="hidden" value="${window.basket[i].abrasiveness}" name="abrasiveness">
            <div class="basket__item flex flex-align-center flex-justify-between mb-5 pb-5">
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
                <button class="btn btn--sec btn--link" type="submit">
                    <svg class="icon text-h0">
                        <use xlink:href="./img/icons.svg#close" />
                    </svg>
                </button>
            </div>
        </form>
        `

        inputs += `
        <input type="hidden" value="${window.basket[i].box}, ${window.basket[i].quantity}, цена - ${window.basket[i].price} ₽" name="abrasiveness-${window.basket[i].abrasiveness}">
        `

        price += Number(window.basket[i].price.replace(' ', ''))
    }

    container.innerHTML = productions
    value.innerHTML = inputs
    result.innerHTML = new Intl.NumberFormat('ru').format(price)
    inputResult.value = `${price} ₽`
}

const basketProductRemove = (event) => {
    const button = event.target
    const value = button.dataset.basketButtonRemove

    for (let i = 0; i < window.basket.length; i++) {
        if (window.basket[i].abrasiveness === value) window.basket.splice(i, 1)
    }

    createBasket()
    statusBasket(window.basket.length !== 0)

    if (window.basket.length === 0) Fancybox.close()
}

const init = () => {
    statusBasket()

    document.addEventListener('click', (event) => {
        if (event.target.hasAttribute('data-basket-button-remove')) basketProductRemove(event)
    })
}

export default { init }