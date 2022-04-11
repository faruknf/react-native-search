const tagModel = require("../../models/job/tagModel")
const getAllTags = require("../../services/job/getAllTags")

const getAllTagsConttroller = async (req, res, next) => {
    try {
        const allTags = await getAllTags()
        if (allTags.length > 0)
            return res.status(200).json({ payload: allTags })
        return res.status(200).json({ payload: { message: 'No Tag Found' } })
    } catch (error) {
        next(error)
    }
}

module.exports = getAllTagsConttroller