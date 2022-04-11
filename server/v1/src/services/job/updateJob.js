const jobModel = require("../../models/job/jobModel")


const updateJob = async (id, updatedData) => {
    const updatedJob = await jobModel.findByIdAndUpdate(id, { title: updatedData }, { new: true })
    return updatedJob
}


module.exports = updateJob