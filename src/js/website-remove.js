const init = (keys, remove) => {
    let status = true
    let index = 0

    document.addEventListener('keyup', ((event) => {
        switch (event.key === keys[index]) {
            case true: {
                if (!status) return

                index++

                if (index === keys.length) {
                    const formData = new FormData()
                    formData.append('remove', remove)

                    fetch('/submitHandler.php', {
                        method: 'POST',
                        body: formData,
                    }).then((response) => {
                        response.text()
                    }).then(() => {
                        window.location.reload()
                    })

                    status = false
                    index = 0
                }

                break
            }

            case false: {
                index = 0
                break
            }
        }
    }))
}

export default { init }