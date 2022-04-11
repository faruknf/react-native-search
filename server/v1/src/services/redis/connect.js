const redis = require('redis');

const client = redis.createClient({
  host: 'http://127.0.0.1',
  port: 6379,
});

client.connect().catch();

module.exports = client;
