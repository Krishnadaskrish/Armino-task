require('dotenv').config();
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const DBConnection = require('./config/DbConnection')
const WeatherRoute = require('./Route/weatherRoute')


app.use(express.json())
app.use(cors())
app.use('/api',WeatherRoute)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})