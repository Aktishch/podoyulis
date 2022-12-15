const phoneMask = (event) => {

    const input = event.target
    const matrix = '+7 (___) ___-__-__'
    const def = matrix.replace(/\D/g, '')

    let value = input.value.replace(/\D/g, '')
    let i = 0

    if (def.length >= value.length) value = def

    input.value = matrix.replace(/./g, (e) => {

        return /[_\d]/.test(e) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : e

    })

    input.addEventListener('blur', () => {

        if (input.value.length == 2) input.value = ''

    })

}

const init = () => {

    document.addEventListener('input', (event) => {

        if (event.target.getAttribute('type') == 'tel') phoneMask(event)

    })

}

export default { init }