const jobModel = require('../../models/job/jobModel');
const createJob = (data) => {
  const job = new jobModel(data);
  return job.save();
};

module.exports = createJob;
