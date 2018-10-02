module.exports = function (app) {



    app.post("/send", (req, res) => {
        console.log(req.body.name)

        var send = require('gmail-send')({
            //var send = require('../index.js')({
            user: process.env.GOOGLE_AUTH_NAME,
            pass: process.env.GOOGLE_AUTH_CODE,
            to: 'avhaymart@gmail.com',
            from: req.body.email,
            subject: `Portfolio email: ${req.body.name}`,
            text: `Sent from ${req.body.email} : ${req.body.message}`,
        });

        console.log('Sending email');

        send({}, function (error, resp) {
            console.log('Error:', error, '; Res:', resp);
            if (error === null) {
                console.log("No error... sending response");
                res.status(200).send("Sent Successfully");
            } else {
                console.log("Error logged.");
                res.status(500).send("Internal Server Error");
            }
        });
    })
}