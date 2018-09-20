require('dotenv').config()
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://ls-api.taalmap.nl' : 'http://localhost:9000',
  'process.env.MY_SECRET': process.env.MY_SECRET
}
