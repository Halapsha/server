const path = require("path");
const nodemailer = require("nodemailer");

class MailerController {
    async mail(req, res, next) {
        let {name, tel} = req.body
        try {
            const {file} = req.files
            let f = file.name.split('.')
            file.mv(path.resolve(__dirname, '..', 'blank', `1.${f[1]}`))


            let nodemailer = require('nodemailer')

            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'specmetallofficial@gmail.com',//'info@spetsmetall16.ru',//'info@cw73071.tmweb.ru',
                    pass: 'specmetallofficial123',//'PTuzOypR3o1(',//'b3ChWp4y',
                },
            })


            var mail = {
                from: '"Заявка" <info@spetsmetall16.ru>',
                to: 'specmetallofficial@gmail.com',
                subject: `Заявка от ${name}`,
                attachments: [
                    {
                        filename: `Файл.${f[1]}`,
                        path: `path/../blank/1.${f[1]}`
                    }
                ],
                html:
                    `<body style="font-size: 35px; font-weight: bold"> Имя: <strong>${name}</strong> <br /> Телефон: <strong>${tel}</strong> </body>`,
            }


            let result = transporter.sendMail(mail, (err, data) => {
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
        }


    catch {
            MaileNotFile()
        }
        function MaileNotFile(){
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'specmetallofficial@gmail.com',//'info@spetsmetall16.ru',//'info@cw73071.tmweb.ru',
                    pass:  'specmetallofficial123',//'PTuzOypR3o1(',//'b3ChWp4y',
                },
            })

            var mail2 = {
                from: '"Заявка" <info@spetsmetall16.ru>',
                to: 'specmetallofficial@gmail.com',
                subject: `Заявка от ${name}`,
                html:
                    `<body style="font-size: 35px; font-weight: bold"> Имя: <strong>${name}</strong> <br /> Телефон: <strong>${tel}</strong> </body>`,
            }

            let result = transporter.sendMail(mail2, (err, data) =>{
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

}
module.exports = new MailerController()