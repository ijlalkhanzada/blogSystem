'use strict';

var _ = require('lodash');
var Post = require('./post.model');
var underscore = require('underscore');
//var s3 = require('s3');
var fs = require('fs');

var mongo = require('mongodb');
var Grid = require('gridfs-stream');
var db = new mongo.Db('blogsystem-dev', new mongo.Server("127.0.0.1", 27017));

var validationError = function(res, err) {
  return res.json(422, err);
};

// write image on mongoDb
exports.imageUpload = function(req, res) {
  var file = req.files.file,
    path = file.path;
  db.open(function (err) {
    if (err) return handleError(err);
    var gfs = Grid(db, mongo);
    var writestream = gfs.createWriteStream({filename: file.name});
    fs.createReadStream(path).pipe(writestream);
    res.send(200, {id: writestream.id});
  });
};
//read image from mongoDb
exports.getImage = function(req, res) {
  db.open(function (err) {
    var gfs = Grid(db, mongo);
    gfs.createReadStream({ _id: req.params.id }).pipe(res);
    console.log('testing Img', req.params.id)
  });
};

// Get list of posts
exports.index = function(req, res) {
  Post.find().populate('post_author').exec(function (err, posts) {
    if(err) { return handleError(res, err); }
    return res.json(200, posts);
  });
};

// Get a single post
exports.show = function(req, res) {
  Post.findById(req.params.id).populate('post_author').exec (function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};

exports.showAuthorPost = function(req, res) {
  Post.find({post_author: req.params.id}, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};
exports.filterPosts = function(req, res) {
  Post.find({category: req.params.id}, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};
exports.editPost = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  Post.create(req.body, function(err, post) {
    if(err) { return handleError(res, err); }
    return res.json(201, post);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Post.findById(req.params.id, function (err, post) {
    if (err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    var updated = _.merge(post, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, post);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    post.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
