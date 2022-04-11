const esClient = require('./connect');

async function indexOne(index, data) {
  await esClient.index({
    index: 'jobs',
    body: {
      ...data,
    },
    refresh: true,
  });
  await esClient.indices.refresh({ index: 'jobs' });
}

module.exports = indexOne;
