const express = require('express')
const path = require('path');

const app = express()
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

const port = 3001


app.listen(port, (err) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Server is up on port: ', port)
    }
})