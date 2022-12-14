const formSubmit = (event) => {

    event.preventDefault()

    const form = event.target
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

            src: '/html-dialogs/dialog-submit.html',
            type: 'ajax',
            dragToClose: false,
            mainClass: 'fancybox-modal'

        }])

        form.reset()

        submitBtn.removeAttribute('disabled')

    }).catch((error) =>

        console.log('The form has not been sent', error)

    )

}

const init = () => {

    document.addEventListener('submit', (event) => {


        if (event.target.classList.contains('-form-submit-')) formSubmit(event)

    })

}

export default { init }