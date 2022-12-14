import ymaps from 'ymaps'

const init = () => {

    const center = [45.03191007458623, 38.921171499999936]
    const mark = [45.03191007458623, 38.921171499999936]

    if (!document.querySelector('*[data-suggest-view]') && !document.getElementById('map')) return

    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps) => {

        const inputs = [...document.querySelectorAll('[data-suggest-view]')]

        inputs.forEach((input) => {

            new maps.SuggestView(input, {

                results: 5,
                container: document.body

            })

        })

        if (document.getElementById('map')) {

            const map = new maps.Map('map', {

                center: center,
                zoom: 16

            })

            const placemark = new maps.Placemark((mark), {}, {

                iconLayout: 'default#image',
                iconImageHref: '../img/geo.png',
                iconImageSize: [60, 60],
                iconImageOffset: [-20, -50]

            })

            map.controls.remove('geolocationControl')
            map.controls.remove('searchControl')
            map.controls.remove('trafficControl')
            map.controls.remove('typeSelector')
            map.controls.remove('fullscreenControl')
            map.controls.remove('zoomControl')
            map.controls.remove('rulerControl')
            map.behaviors.disable(['scrollZoom'])
            map.geoObjects.add(placemark)

        }

    }).catch((error) =>

        console.log('Failed to load Yandex Maps', error)

    )

}

export default { init }