const enviarEmail = require('./email')
const formData = require('express-form-data')

const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')
app.use(formData.parse())

// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('assets/index.html'))
})

app.get('/estilo.css', function (req, res) {
  res.sendFile(path.resolve('assets/estilo.css'))
})

app.get('/script.js', function (req, res) {
  res.sendFile(path.resolve('assets/script.js'))
})

app.post('/enviar_email', function (req, res) {
  const nome = req.body.nome
  const email = req.body.email
  const telefone = res.body.telefone
  const texto = res.body.texto

  console.log(req.body)
  // enviarEmail(nome, asdas, asdas, asdsa)
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Servidor Iniciado http://localhost:${port}`)
})
