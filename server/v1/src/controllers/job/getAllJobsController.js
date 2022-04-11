const jobModel = require('../../models/job/jobModel');

const getAllJobsController = async (req, res, next) => {
  try {
    const allJobs = await jobModel.find();
    if (allJobs.length > 0) return res.status(200).json({ payload: allJobs });
    return res.status(200).json({ payload: { message: 'No job found' } });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllJobsController;
