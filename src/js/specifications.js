const init = () => {

    const specifications = document.querySelector('.-specifications-')

    if (specifications) {

        const toggles = specifications.querySelectorAll('.-specifications-toggle-')
        const product = specifications.querySelector('.-specifications-product-')
        const img = specifications.querySelector('.-specifications-img-')

        let removeTimeout

        toggles.forEach(toggle => {

            toggle.addEventListener('click', () => {

                if (toggle.checked == true) {

                    if (removeTimeout) clearTimeout(removeTimeout)

                    product.classList.add('specifications__product--open')

                    if (toggle.dataset.specificatio == '1') img.src = 'img/product-1.png'

                    if (toggle.dataset.specificatio == '2') img.src = 'img/product-2.png'

                    removeTimeout = setTimeout(() => product.classList.remove('specifications__product--open'), 610)

                }

            })

        })

    }

}

export default { init }