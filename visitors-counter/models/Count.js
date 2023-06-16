const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
  id: String,
  totalCount: Number
});

const CountModel = mongoose.model('Count', countSchema);

module.exports = CountModel;
