var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'patiltanuja566@gmail.com',
    pass: 'tanavisat'
  }
});

var mailOptions = {
  from: 'patiltanuja566@gmail.com',
  to: '2016bme023@sggs.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});