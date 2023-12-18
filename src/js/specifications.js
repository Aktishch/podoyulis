const init = () => {
    const specifications = document.querySelectorAll('*[data-specification]')

    specifications.forEach(specification => {
        const inputPrice = specification.querySelector('*[data-specification-input="price"]')
        const inputOldPrice = specification.querySelector('*[data-specification-input="oldprice"]')
        const inputBox = specification.querySelector('*[data-specification-input="box"]')
        const inputQuantity = specification.querySelector('*[data-specification-input="quantity"]')
        const labels = specification.querySelectorAll('*[data-specification-label]')

        labels.forEach(label => {
            const radio = label.querySelector('*[data-specification-radio]')
            const textPrice = label.querySelector('*[data-specification-text="price"]')
            const textOldPrice = label.querySelector('*[data-specification-text="oldprice"]')
            const textBox = label.querySelector('*[data-specification-text="box"]')
            const textQuantity = label.querySelector('*[data-specification-text="quantity"]')

            const writeInputValue = () => {
                if (radio.checked === true) {
                    inputPrice.value = textPrice.textContent
                    inputOldPrice.value = textOldPrice.textContent
                    inputBox.value = textBox.textContent
                    inputQuantity.value = textQuantity.textContent
                }
            }

            writeInputValue()

            radio.addEventListener('change', writeInputValue)
        })
    })
}

export default { init }