const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    mail: {
        user: process.env.MAIL_FROM,
        password: process.env.MAIL_TOKEN
    }
}
