const express = require('express')
const apiRoutes = require('./routes/apiRoutes')

const app = express()
const port = process.env.PORT

app.use(express.static('public'))
app.use(express.json())

// CORS middleware - Only in development
if (process.env.NODE_ENV === 'dev') {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        res.header('Access-Control-Allow-Headers', 'Content-Type')
        next()
    })
}

app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
