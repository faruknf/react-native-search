const companyModel = require('../../models/job/companyModel');

async function getCompanies() {
  const companies = await companyModel.find();
  return companies;
}

module.exports = getCompanies;
