const search = require('../../services/elastic/search');
const esClient = require('../../services/elastic/connect');
const redisClient = require('../../services/redis/connect');
const searchOnJobsController = async (req, res, next) => {
  try {
    const results = await search('jobs', req.query.search, [
      'title',
      'description',
    ]);

    await redisClient.setEx(
      `search:${req.query.search}`,
      10 * 60,
      JSON.stringify(results)
    );
    return res.status(200).json({ payload: [...results] });
  } catch (error) {
    next(error);
  }
};

module.exports = searchOnJobsController;
