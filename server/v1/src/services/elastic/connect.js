const { Client } = require('@elastic/elasticsearch');
const fs = require('fs');
const path = require('path');

const client = new Client({
  node: 'https://127.0.0.1:9200',
  auth: {
    username: 'elastic',
    password: process.env.password,
  },
  tls: {
    ca: fs.readFileSync(path.join(__dirname, './http_ca.crt')),
    rejectUnauthorized: false,
  },
});

module.exports = client;
