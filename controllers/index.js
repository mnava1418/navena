const webPageConfig = require('../config/webPage')

const loadWebPage = (req, res) => {
    res.render('index', webPageConfig)
}

module.exports = {
    loadWebPage
}