module.exports = function (app) {



    app.post("/send", (req, res) => {
        console.log(req.body.name)

        var send = require('gmail-send')({
            //var send = require('../index.js')({
            user: 'avhaymart@gmail.com',
            // user: credentials.user,                  // Your GMail account used to send emails
            pass: 'ngpabhqrbendnmrd',
            // pass: credentials.pass,                  // Application-specific password
            to: 'avhaymart@gmail.com',
            // to:   credentials.user,                  // Send to yourself
            // you also may set array of recipients:
            // [ 'user1@gmail.com', 'user2@gmail.com' ]
            from:    req.body.email,            // from: by default equals to user
            // replyTo: credentials.user,            // replyTo: by default undefined
            // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
            subject: req.body.name,
            text: req.body.message, // Plain text
            //html:    '<b>html text</b>'            // HTML
        });


        console.log('Sending email');


        send({
          }, function (err, res) {
            console.log('Error:', err, '; Res:', res);
          });
    })


    //other routes..
}