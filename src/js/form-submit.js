const formValidate = (form) => {

    const labels = form.querySelectorAll('.-validate-label-')

    let validate = true

    labels.forEach(label => {

        const input = label.querySelector('.-validate-input-')
        const error = label.querySelector('.-validate-error-')

        const inputFocus = () => {

            input.focus()
            input.classList.add('input--error')
            error.classList.remove('error--none')
            validate = false

        }

        const maxLengthInputTel = (numb) => {

            if (input.value.length > 0 && input.value.length < numb) {

                error.innerText = 'Введите корректный номер!'

                inputFocus()

            }

        }

        if (input.value == null || input.value == '' || input.value.length == 0) {

            inputFocus()

        } else {

            input.classList.remove('input--error')
            error.classList.add('error--none')

        }

        if (input.classList.contains('-input-name-')) {

            if (input.value.length == 1) inputFocus()

        }

        if (input.classList.contains('-input-tel-')) {

            if (input.value[1] == '7') {

                maxLengthInputTel(18)

            } else if (input.value[0] == '8') {

                maxLengthInputTel(17)

            } else if (input.value[1] !== '7') {

                maxLengthInputTel(11)

            } else {

                error.innerText = 'Пожалуйста, введите ваш номер!'

            }

        }

        if (input.classList.contains('-input-textarea-')) {

            if (input.value.length > 0 && input.value.length < 10) {

                error.innerText = 'Введите не менее 10 символов!'

                inputFocus()

            } else {

                error.innerText = 'Пожалуйста, оставьте предложение!'

            }

        }

        input.addEventListener('input', () => {

            if (input.value.length > 0) {

                input.classList.remove('input--error')
                error.classList.add('error--none')

            }

        }, { once: true })

    })

    return validate

}

const formSubmit = (event) => {

    event.preventDefault()

    const form = event.target

    if (formValidate(form)) {

        const formData = new FormData(form)
        const requestUrl = String(form.dataset.request)
        const submitBtn = form.querySelector('button[type="submit"]')
    
        submitBtn.setAttribute('disabled', 'disabled')
    
        fetch(requestUrl, {
    
            method: 'POST',
            body: formData
    
        }).then((response) => {
    
            response.text()
    
        }).then(() => {
    
            Fancybox.close()
    
            Fancybox.show([{
    
                src: 'dialog-submit.php',
                type: 'ajax',
                dragToClose: false,
                mainClass: 'fancybox-custom-modal'
    
            }])
    
            form.reset()
    
            submitBtn.removeAttribute('disabled')
    
        }).catch((error) =>
    
            console.log('The form has not been sent', error)
    
        )

    }

}

const init = () => {

    document.addEventListener('submit', (event) => {

        if (event.target.classList.contains('-form-submit-')) formSubmit(event)

    })

}

export default { init }