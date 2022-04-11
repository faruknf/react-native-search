const mongoose = require('mongoose')

const tagsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false })

const tagModel = new mongoose.model('tags', tagsSchema)

module.exports = tagModel