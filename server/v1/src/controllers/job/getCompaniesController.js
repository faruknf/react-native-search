const getCompanies = require('../../services/job/getCompanies');

async function getCompaniesController(req, res, next) {
  try {
    const companies = await getCompanies();
    return res.status(200).json({ payload: companies });
  } catch (error) {
    next(err);
  }
}

module.exports = getCompaniesController;
