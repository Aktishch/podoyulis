const init = () => {

    // const specifications = document.querySelector('.-specifications-')

    // if (specifications) {

    //     const toggles = specifications.querySelectorAll('.-specifications-toggle-')
    //     const product = specifications.querySelector('.-specifications-product-')
    //     const img = specifications.querySelector('.-specifications-img-')

    //     let removeTimeout

    //     toggles.forEach(toggle => {

    //         toggle.addEventListener('click', () => {

    //             if (toggle.checked == true) {

    //                 if (removeTimeout) clearTimeout(removeTimeout)

    //                 product.classList.add('specifications__product--open')

    //                 if (toggle.dataset.specificatio == '1') img.src = 'img/product-1.png'

    //                 if (toggle.dataset.specificatio == '2') img.src = 'img/product-2.png'

    //                 removeTimeout = setTimeout(() => product.classList.remove('specifications__product--open'), 610)

    //             }

    //         })

    //     })

    // }

    const img = document.querySelector('.-specifications-img-')

    if (!img) return
    
    let src = true

    setInterval(() => {

        if (src) {
            img.src = 'img/product-2.png'
            src = false
        } else {
            img.src = 'img/product-1.png'
            src = true
        }
        
    }, 3000);

}

export default { init }