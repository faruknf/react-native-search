const tagModel = require("../../models/job/tagModel")

const getAllTags = async () => {

    const allTags = await tagModel.find()
    return allTags

}

module.exports = getAllTags