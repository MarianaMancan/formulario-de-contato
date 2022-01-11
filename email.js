var nodemailer = require('nodemailer')

const emailMariana = 'marianamancan@gmail.com'
const senhaEmailMariana = 'rosemeiremario'
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailMariana,
    pass: senhaEmailMariana
  }
})

function enviarEmail(nome, telefone, email, texto) {
  var mailOptions = {
    from: emailMariana,
    to: emailMariana,
    subject: `${nome} te enviou uma mensagem`,
    text: `${nome} te enviou uma mensagem. Email ${telefone}`
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
