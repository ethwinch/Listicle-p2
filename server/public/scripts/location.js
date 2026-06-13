const renderLocation = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    // console.log(requestedID)

    const response = await fetch('/locations')
    const data = await response.json()

    const locationContent = document.getElementById('location-content')

    let location;


    if (data){
        // console.log(data)
        location = data.find(location => location.id === requestedID)
        // console.log(location)

        if (location) {
            console.log(location)
            console.log(document.getElementById('image'))
            
            document.getElementById('image').src = location.image

            const name = document.getElementById('name')
            name.textContent = location.name

            const borough = document.getElementById('borough')
            borough.textContent = location.borough + ', ' + location.neighborhood

            const type = document.getElementById('type')
            type.textContent = 'Type: ' + location.type

            const masks = document.getElementById('masks')
            masks.textContent = 'Masks: ' + location.masks

            const desc = document.getElementById('desc')
            desc.textContent = location.desc

            const url = document.getElementById('URL')
            url.textContent = location.URL
            url.href = location.URL

            document.title = `Queer Hot Spots in NYC - ${location.name}`
        } else {
            const notFound = document.createElement('h2')
            notFound.textContent = 'No Locations Found'
            locationContent.appendChild(notFound)
        }
    }
}

renderLocation()