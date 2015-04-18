'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  post_author: String,
  post_date: { type: Date, default: Date.now },
  post_date_gmt: { type: Date, default: Date.now },
  post_content: String,
  post_tittle: String,
  post_excerpt: String,
  post_status: String,
  comment_status: String,
  ping_status: String,
  post_password: String,
  post_name: String,
  to_ping: String,
  pinged: String,
  post_modified_date: String,
  post_modified_gmt: String,
  post_content_filtered: String,
  post_parent: String,
  guid_varchar: String,
  menu_order: String,
  post_type: String,
  post_mime: String,
  comment_count: String

});

module.exports = mongoose.model('Post', PostSchema);