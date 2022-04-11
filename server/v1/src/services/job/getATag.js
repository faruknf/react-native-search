const XErrorX = require('../../helpers/ErrorHandler/xerrorx');
const tagModel = require('../../models/job/tagModel');
const getATag = async (params) => {
  const tag = await tagModel.find({ name: params.name });
  return tag;
};

module.exports = getATag;
