//create class & exports
module.exports.Email = function (receiver,subject,message)
{
    //3 property variable
    this.receiver = receiver,
    this.subject = subject,
    this.message = message,
    this.send = function(){
        console.log('I will send email to ' + this.receiver);
        console.log('subject = ' + this.subject + ' message = ' + this.message);
    }
}