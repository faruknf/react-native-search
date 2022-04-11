const express = require('express');
const createJobController = require('../../controllers/job/createJobController');
const deleteAJobController = require('../../controllers/job/deleteAJobController');
const getAllJobsController = require('../../controllers/job/getAllJobsController');
const searchOnJobsController = require('../../controllers/job/searchOnJobsController');
const updateJobController = require('../../controllers/job/updateJobController');
const cacheSearch = require('../../middlewares/cacheSearch');

const router = express.Router();

router.post('/', createJobController);
router.get('/', getAllJobsController);
router.get('/search', cacheSearch, searchOnJobsController);
router.patch('/:id', updateJobController);
router.delete('/:id', deleteAJobController);
module.exports = router;
