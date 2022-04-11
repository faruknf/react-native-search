const getATag = require("../../services/job/getATag")

const getATagController = async (req, res, next) => {
    try {
        const tag = await getATag(req.params)
        return res.status(200).json({ payload: tag })
    } catch (error) {
        next(error)
    }

}

module.exports = getATagController