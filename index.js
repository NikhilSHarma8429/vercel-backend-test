const express = require('express')
const app = express()

app.get('/download', (req, res) => {
    res.send('Download Server')
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(2000, () => {
    console.log('Server Running on port 2000')
})