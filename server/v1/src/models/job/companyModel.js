const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const companyModel = mongoose.model('company', companySchema);

module.exports = companyModel;
