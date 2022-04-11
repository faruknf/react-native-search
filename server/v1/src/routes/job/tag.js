const express = require('express')
const getAllTagsConttroller = require('../../controllers/job/getAllTagsController')
const getATagController = require('../../controllers/job/getATagController')

const router = express.Router()

router.get('/', getAllTagsConttroller)
router.get('/:name', getATagController)

module.exports = router
