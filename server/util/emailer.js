
var q = require("q");
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
exports.util = exports.util || {};
exports.util.Email = exports.util.Email || {};
var fromAddress = "Blog Post System  ✔ <admin@tetsingblogsystem.com>";
exports.util.Email.SendEmail = function(obj){
  var deferred = q.defer();
  console.log("1 + Inside Send E-Mail!");
  // Create a SMTP transport object
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: "tetsingblogsystem@gmail.com",
      pass: "ijlalkhan1"
    }
  }));


  console.log('2 = SMTP Configured in Sub');
  var mailOptions = {
    from: fromAddress, // sender address
    to: obj.To || 'user.email', // list of receivers
    subject: obj.Subject, // Subject line
    html: obj.message // html body
  };


  console.log('3 = Sending Mail from Emailer');

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      deferred.reject({error : error, status : true});
      console.log('5 = ',error);
    }else{
      deferred.resolve({status : true});
      console.log('6 = Message sent: ' + info.response);
    }
  });
  return deferred.promise;
};
