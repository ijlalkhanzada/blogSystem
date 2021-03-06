'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
//var _ = require('underscore');
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
    gfs.createReadStream({ _id: req.params.id }).pipe(res)
  });
};


/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.send(500, err);
    res.json(200, users);
  });
};

/*
 Email Sending from NodeEmailer Module
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  var userEmail = req.body.email;
  newUser.provider = 'local';
  newUser.role = 'subscriber';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    console.log("User Created!");
    var emilURL = req.protocol + "://" + req.get("host") + "/approve/"+user._id;
    console.log("Email Created!",emilURL);
    require('./../../util/emailer').util.Email.SendEmail({
      Subject: "Account Approval !",
      To: 'tetsingblogsystem@gmail.com',
      //message: "<h2>Dear Admin " + "<p>Please Click <a href='" + emilURL + "'>here</a> to Approve Prof " + user.userName + " Account.</p></h2><br/><br/><br/><br/><p>Team<br/>University</p>"
      message: "<h2> Hello Admin</h2><p>Please Click <a href='" + emilURL +"'>HERE</a> to Approve Prof <b>" + user.userName +" </b>  Account</p><h3>Team <h4>Blog Post</h4> </h3>"
    })
      .then(function () {
        return res.json(201, user);
      }, function (errObj) {
        return res.json(201, user);
      });
    require('./../../util/emailer').util.Email.SendEmail({
      Subject: "Verify your Blog Account!",
      To: userEmail,
      message: "<h2>Dear " + user.userName + "<p>Your Account will be Activated after Admin approval.</p></h2><br/><br/><br/><br/><b>Team<br/>Blog Post System </b>"


    }).then(function () {
      return res.json(201, user);
    }, function (errObj) {
      return res.json(201, user);
    });
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/*
 Email Sending from NodeEmailer Module
 */



/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user);
  });
};

/**
 * Get a single user complete data
 */

exports.showData = function (req, res, next) {
  var userId = req.user._id;
  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};

// Updates an existing student in the DB custom.
exports.update = function(req, res) {
//    if(req.body._id) { delete req.body._id; }
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    console.log(req.body);
    console.log(req.user._id);
    if (err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
function handleError(res, err) {
  return res.send(500, err);
}
