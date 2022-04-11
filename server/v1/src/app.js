const express = require('express');
const config = require('./config');
const XErrorX = require('./helpers/ErrorHandler/xerrorx');
const connectDB = require('./services/db/connectDb');
const { jobRouter, tagRouter, companyRouter } = require('./routes');
const getAllJobs = require('./services/job/getAllJobs');
const createIndex = require('./services/elastic/create');
const app = express();

config();

XErrorX.handleNotCaughtError();

connectDB();
createIndex();

app.use(express.json());

app.use('/job', jobRouter);
app.use('/tag', tagRouter);
app.use('/company', companyRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

app.use(XErrorX.handleOnMiddleware);
