const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      ref: 'tags',
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'update_at' },
    versionKey: false,
  }
);

const jobModel = mongoose.model('job', jobSchema);

module.exports = jobModel;
