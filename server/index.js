const express = require('express')
const axios = require("axios")
const cors = require("cors")
const app = express()
const port = 3001

require("dotenv").config({path: "./.env.local"})

const url = "https://coronavirus.app"

app.use(cors())

app.get('/api/get-locations', async (req, res) => {
    try {
        const response = await axios.get(`${url}/get-places`, {
            headers: {
                "authorization": `Bearer ${process.env.CORONAVIRUS_DATA_API_KEY}`,
                "content-type": "application/json"
            }
        })
            .then(result => result.data)
            .then(data => res.json(data))
    }

    catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})