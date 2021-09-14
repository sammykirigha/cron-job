const express = require('express');
const sendEmail = require('./main');
const router = express.Router()

router.get('/send/text', async (req, res) => {
    const message = {
        from: {
            name: 'The Jitu',
            address: process.env.EMAIL
        },
        to: 'dkirigha18@gmail.com',
        subject: 'Sending a Mail',
        text: 'Hellow welcome to our company'
    }

    try {
        await sendEmail(message)
        res.send("Email sent")
    } catch (error) {
        res.send("Error sending the emeil")
    }

})

module.exports = router