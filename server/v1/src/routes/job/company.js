const router = require('express').Router();
const getCompaniesController = require('../../controllers/job/getCompaniesController');

router.get('/', getCompaniesController);

module.exports = router;
