const dotenv = require('dotenv')
const path = require('path')
module.exports = () => {
    dotenv.config({ path: path.join(__dirname, '../', '.env') })
}