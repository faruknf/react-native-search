const esClient = require('./connect');

async function search(index, value, fields) {
  const result = await esClient.search({
    index,
    query: {
      multi_match: {
        fields,
        query: value,
        fuzziness: 'AUTO',
      },
    },

    sort: {
      _score: { order: 'desc' },
    },
  });
  return result.hits.hits;
}

module.exports = search;
