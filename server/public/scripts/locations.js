const renderLocations = async () => {
    const response = await fetch('/locations')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(location => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${location.image})`

            const locationName = document.createElement('h3')
            locationName.textContent = location.name
            bottomContainer.appendChild(locationName)

            const locationAddr = document.createElement('p')
            locationAddr.textContent = location.borough + ', ' + location.neighborhood
            bottomContainer.appendChild(locationAddr)

            const locationType = document.createElement('p')
            locationType.textContent = location.type
            bottomContainer.appendChild(locationType)

            const locationMasks = document.createElement('p')
            locationMasks.textContent = 'Masks: ' + location.masks
            bottomContainer.appendChild(locationMasks)


            const readMore = document.createElement('a')
            readMore.textContent = 'Read More >'
            readMore.setAttribute('role', 'button')
            readMore.href = `/locations/${location.id}`
            bottomContainer.appendChild(readMore)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }else{
        const message = document.createElement('h2')
        message.textContent = 'No Locations Available'
        mainContent.appendChild(message)
    }
}

// const requestedURL = window.location.href.split('/').pop()
// if (requestedURL) {
//     window.location.href = '../404.html'
// } else {
//     renderLocations()
// }
renderLocations()

