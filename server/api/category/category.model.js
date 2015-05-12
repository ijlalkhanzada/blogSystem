'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: String,
    post_date: { type: Date, default: Date.now },
    post_name: String,
  category: String,
  post_content:String,

  term_group: {type: Schema.ObjectId}
});

module.exports = mongoose.model('Category', CategorySchema);
