const jobModel = require('../../models/job/jobModel');

async function getAllJobs() {
  return jobModel.find();
}

module.exports = getAllJobs;
