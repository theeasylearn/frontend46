var nodemailer = require('nodemailer');
//create class & exports
module.exports.Email = function (receiver, subject, message) {

    //3 property variable
    this.receiver = receiver,
        this.subject = subject,
        this.message = message,
        this.send = function () {
            var sender = 'tempm7777@gmail.com';
            var password = 'wahe iifl jzoi apax';
            var MailSender = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: sender,
                    pass: password,
                },
            });
            console.log('I will send email to ' + this.receiver);
            console.log('subject = ' + this.subject + ' message = ' + this.message);
            MailSender.sendMail({
            from: "Your Name" + `<${sender}>`, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: message, // html body
          });
        }
}