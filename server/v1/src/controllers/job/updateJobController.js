const updateJob = require("../../services/job/updateJob")

const updateJobController = async (req, res, next) => {
    try {
        const updatedResult = await updateJob(req.params.id, req.body.title)
        return res.status(200).json({ payload: updatedResult })
    } catch (error) {
        next(error)
    }

}

module.exports = updateJobController