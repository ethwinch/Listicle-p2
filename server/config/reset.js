import { pool } from './database.js'
import './dotenv.js'
import locationData from '../data/locations.js'

const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            borough VARCHAR(10) NOT NULL,
            neighborhood VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL,
            masks VARCHAR(255) NOT NULL,
            URL VARCHAR(255) NOT NULL,
            image VARCHAR(510) NOT NULL,
            description VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )`
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 locations table created successfully')
    }catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}


const seedLocationsTable = async() => {
    await createLocationsTable()

    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, borough, neighborhood, type, masks, URL, image, description, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        }

        const values = [
            location.name,
            location.borough,
            location.neighborhood,
            location.type,
            location.masks,
            location.URL,
            location.image,
            location.description,
            location.submittedOn
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }

            console.log(`✅ ${location.name} added successfully`)
        })
    })
}

seedLocationsTable()