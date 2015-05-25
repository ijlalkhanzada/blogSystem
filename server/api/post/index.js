'use strict';

var express = require('express');
var controller = require('./post.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');
var multipart = require('connect-multiparty')
    , multipartMiddleware = multipart();
var nodemailer = require("nodemailer");

var router = express.Router();

router.post('/upload/url', auth.hasRole('author'), multipartMiddleware, controller.imageUpload);
router.get('/:id/show', multipartMiddleware, controller.getImage);
router.get('/:id',auth.hasRole('author'), controller.showAuthorPost);
router.get('/:id/edit',auth.hasRole('author'), controller.editPost);
router.get('/:id/category', controller.filterPosts);
router.get('/:id/full', controller.show);
router.post('/', auth.hasRole('author'),controller.create);
router.put('/:id', auth.hasRole('author'), controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', auth.hasRole('author'), controller.destroy);
router.get('/', controller.index);


module.exports = router;
