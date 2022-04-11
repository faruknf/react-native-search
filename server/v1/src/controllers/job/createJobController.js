const indexOne = require('../../services/elastic/indexOne');
const createJob = require('../../services/job/createJob');
const getATag = require('../../services/job/getATag');

const createJobController = async (req, res, next) => {
  try {
    let { title, description, tags } = req.body;

    for (let i = 0; i < tags.length; i++) {
      let tag = await getATag({ name: tags[i] });
      if (!tag[0]) {
        tags.splice(i, 1);
      }
    }
    const dbResponse = await createJob({ title, description, tags });
    const id = dbResponse._doc._id;
    delete dbResponse._doc._id;
    await indexOne('jobs', { ...dbResponse._doc, id });
    res.status(201).json({ payload: dbResponse });
  } catch (error) {
    next(error);
  }
};

module.exports = createJobController;
