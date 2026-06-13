import express from 'express'
import './config/dotenv.js'
import locationsRouter from './routes/locations.js'

const app = express()

// initialize middleware
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/locations', locationsRouter)


// Define a route for the root URL
app.get('/', (req, res) => {
    res.status(200).send('<h1>LISTICLE PROJECT P1</h1>')
})


// Start server on Port 3001
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})


