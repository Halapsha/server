class MailerController {
    async mail(req, res, next) {
        const {name, tel} = req.body

        let nodemailer = require('nodemailer')

        let transporter = nodemailer.createTransport({
            host: 'smtp.timeweb.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'info@cw73071.tmweb.ru',
                pass: 'b3ChWp4y',
            },
        })

        var mail = {
            from: '"Заявка" <info@cw73071.tmweb.ru>',
            to: 'specmetallofficial@gmail.com',
            subject: `Заявка от ${name}`,

            html:
                `<body style="font-size: 35px; font-weight: bold"> Имя: <strong>${name}</strong> <br /> Телефон: <strong>${tel}</strong> </body>`,
        }
        let result = transporter.sendMail(mail, (err, data) =>{
            if (err) {
                res.json({
                    status: 'fail'
                })
            } else {
                res.json({
                    status: 'success'
                })
            }
        })


        console.log(result);

    }

}
module.exports = new MailerController()