function teste() {
  var nome = document.getElementById('nome').value
  var telefone = document.getElementById('telefone').value
  var email = document.getElementById('email').value
  var texto = document.getElementById('texto').value

  try {
    solicitarEnvioEmail(nome, telefone, email, texto)
  } catch (error) {
    console.error(error)
    alert(error.message)
  }
}

function nomeEstaInvalido(nome) {
  return nome == null || nome == ''
}

function solicitarEnvioEmail(nome, telefone, email, texto) {
  if (nomeEstaInvalido(nome)) {
    throw Error('Nome não informado')
  }

  var myHeaders = new Headers()
  var form = new FormData()
  form.append('nome', nome)
  form.append('email', email)
  form.append('telefone', telefone)
  form.append('texto', texto)

  var config = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: form
  }

  fetch('http://localhost:3000/enviar_email', config)
    .then(function (response) {
      return response.blob()
    })
    .then(function (myBlob) {
      var objectURL = URL.createObjectURL(myBlob)
      myImage.src = objectURL
    })

  console.log('Email enviado!')
}
