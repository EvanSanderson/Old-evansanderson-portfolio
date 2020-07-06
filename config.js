const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  bucket: process.env.BUCKET_NAME
}