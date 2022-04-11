const esClient = require('./connect');

async function create() {
  const isExist = await esClient.indices.exists({ index: 'jobs' });
  if (!isExist) {
    await esClient.indices.create({
      index: 'jobs',
      body: {
        settings: {
          analysis: {
            analyzer: {
              my_analyzer: {
                tokenizer: 'my_tokenizer',
                filter: ['lowercase'],
              },
            },
            tokenizer: {
              my_tokenizer: {
                type: 'edge_ngram',
                min_gram: 3,
                max_gram: 10,
                token_chars: ['letter', 'digit'],
              },
            },
          },
        },
        mappings: {
          properties: {
            title: {
              type: 'text',
              analyzer: 'my_analyzer',
            },
            description: {
              type: 'text',
              analyzer: 'my_analyzer',
            },
          },
        },
      },
    });
  }
}

module.exports = create;
