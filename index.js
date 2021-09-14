const express = require('express');
const cron = require('node-cron')
const emailRouter = require('./routes')
const app = express()

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Cron job testing')
})

// app.use('/email', emailRouter)

cron.schedule('*/10 * * * *', () => {
    app.use('/email', emailRouter)
    console.log("hellooo");
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

