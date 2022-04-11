const search = require('../services/elastic/search');
const redisClient = require('../services/redis/connect');

async function cacheSearch(req, res, next) {
  try {
    const input = req.query.search;
    if (input.trim().length > 0) {
      const keys = await redisClient.keys(`search:${input}`);
      if (keys.length > 0) {
        const values = JSON.parse(await redisClient.get(`search:${input}`));
        return res.status(200).json({ payload: [...values] });
      }

      next();
    }
  } catch (error) {
    next();
  }
}

module.exports = cacheSearch;
