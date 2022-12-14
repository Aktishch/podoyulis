const init = () => {

    const result = document.querySelector('.-result-')

    if (result) {

        const body = document.body
        const slide = result.querySelector('.-result-slide-')
        const before = result.querySelector('.-result-before-')
        const img = result.querySelector('.-result-img-')
        const change = result.querySelector('.-result-change-')

        let active = false
        let width = slide.offsetWidth

        img.style.width = `${width}px`

        const  beforeAfterSlide = (x) => {

            let shift = Math.max(0, Math.min(x, slide.offsetWidth))

            before.style.width = `${shift}px`
            change.style.left = `${shift}px`

        }

        const pauseEvents = (event) => {

            event.stopPropagation()
            event.preventDefault()
        }

        body.addEventListener('mousedown', (event) => {

            if (event.target.closest('.-result-slide-')) active = true
            
        })


        body.addEventListener('mouseup', () => {

            active = false
            
        })

        body.addEventListener('mouseleave', () => {

            active = false
            
        })

        body.addEventListener('mousemove', (event) => {

            if (!active) return

            let x = event.pageX

            x -= slide.getBoundingClientRect().left

            beforeAfterSlide(x)
            pauseEvents(event)

        })

        body.addEventListener('touchstart', (event) => {

            if (event.target.closest('.-result-slide-')) active = true
            
        })


        body.addEventListener('touchend', () => {

            active = false
            
        })

        body.addEventListener('touchcancel', () => {

            active = false
            
        })

        body.addEventListener('touchmove', (event) => {

            if (!active) return

            let x

            for (let i = 0; i < event.changedTouches.length; i++) {

                x = event.changedTouches[i].pageX
            }

            x -= slide.getBoundingClientRect().left

            beforeAfterSlide(x)
            pauseEvents(event)

        })

    }

}

export default { init }