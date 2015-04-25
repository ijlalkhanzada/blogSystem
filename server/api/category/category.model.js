'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: String,
    slug: String,
    term_group: Boolean,
    term_id: Number
});

module.exports = mongoose.model('Category', CategorySchema);