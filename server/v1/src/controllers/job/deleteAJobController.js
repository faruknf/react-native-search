const deleteJob = require("../../services/job/deleteJob")

const deleteAJobController = async (req, res, next) => {
    try {
        const deletedJob = await deleteJob(req.params.id)
        return res.status(200).json({ payload: { message: 'Job deleted successfully' } })
    } catch (error) {
        next(error)
    }

}

module.exports = deleteAJobController