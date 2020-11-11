const nodeMailer = require('nodemailer')
const appAuth = require('../config/appAuth')

const sendResponse = (code, message) => {
    return {
        status: code,
        json: {message}
    }
}

const sendEmail = async (subject, to, message) => {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: appAuth.mail.user,
            pass: appAuth.mail.password,
        }
    })

    const mailOptions = {
        from: 'Navena <contacto@navenanutricion.com>',
        to: to,
        subject: subject,
        html: message,
    }
    
    const result = await transporter.sendMail(mailOptions)
    .then(info => {
        console.log(`Email Sent: ${info.messageId}`)
        return sendResponse(200, `Email Sent: ${info.messageId}`)
    })
    .catch(err => {
        console.log(err)
        return sendResponse(500, err)
    })
    
    return result
}

module.exports = {
    sendEmail,
    sendResponse
}
