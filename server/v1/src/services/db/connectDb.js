const mongoose = require('mongoose')
const XErrorX = require('../../helpers/ErrorHandler/xerrorx')

const connectDB = async () => {
    try {
        const db = mongoose.connection
        db.once('open', () => {
            console.log('Database connection started')
        })
        await mongoose.connect('mongodb://127.0.1:27017/jobs')
    } catch (error) {
        console.log(error)
        throw new XErrorX('Internal Server Error', 500, { isForClient: true })
    }
}


module.exports = connectDB