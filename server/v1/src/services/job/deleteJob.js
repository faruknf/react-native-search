const jobModel = require("../../models/job/jobModel")


const deleteJob = async (id) => {
    const deletedJob = await jobModel.findByIdAndDelete(id)
    return deletedJob
}


module.exports = deleteJob