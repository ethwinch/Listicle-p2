import express from 'express'
import path from 'path'
import LocationsController from '../controllers/locations.js'

import { fileURLToPath } from 'url'

// import locationsData from '../data/locations.js'

const __filename = fileURLToPath(import.meta.url) //import.meta.url -> contains the URL of the current module file
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', LocationsController.getLocations)

router.get('/:locationID', (req, res) => {
    console.log('Location route hit: ', req.params.locationID)
    res.status(200).sendFile(path.resolve(__dirname, '../public/location.html'))
})


export default router