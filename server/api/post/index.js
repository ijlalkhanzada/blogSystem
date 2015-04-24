'use strict';

var express = require('express');
var controller = require('./post.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

//router.get('/', auth.hasRole('editor'), controller.index);
router.get('/', controller.index);
router.get('/:id',auth.hasRole('author'), controller.showAuthorPost);
router.get('/:id/edit',auth.hasRole('author'), controller.editPost);
router.post('/', auth.hasRole('author'),controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;
