const nodemailer = require('nodemailer');
const cron = require('node-cron')
const dotenv = require('dotenv');
dotenv.config()

const transport = nodemailer.createTransport(
    {
        service: 'hotmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    }
)

const sendEmail = async (message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                return reject(err)
            }

            resolve(info.response)
        })
    })
}

// cron.schedule('* /3 * * * *', sendEmail(message))

module.exports = sendEmail;