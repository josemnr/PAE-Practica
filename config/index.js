require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0",
    mongoUrl: process.env.MONGO_URL,
    api_key: process.env.API_KEY
}

module.exports = { config };