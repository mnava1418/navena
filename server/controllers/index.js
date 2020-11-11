const webPageConfig = require('../config/webPage')
const services = require('../services/index')

const loadWebPage = (req, res) => {
    res.render('index', webPageConfig)
}

const sendEmail = async(req, res) => {
    const body = req.body
    const result = await services.sendEmail(body.subject, body.to, body.message)
    res.status(result.status).json(result.json)
}

module.exports = {
    loadWebPage,
    sendEmail
}