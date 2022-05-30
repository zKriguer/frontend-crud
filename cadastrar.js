let submit = document.getElementById('submit')

let form = document.forms[0]
form.addEventListener('submit', (event) =>{
    event.preventDefault()
})

submit.addEventListener('click', async () =>{
    const regxName = /^[a-z]+/i
    const regxEmail = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?$/i
    const regxPassword = /^.+/i
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if(!regxName.test(name)) alert('Nome Inválido')
    if(!regxEmail.test(email)) alert('Email indecente')
    if(!regxPassword.test(password)) alert('Senha invalida')

    const user = { name, email, password }

    const post = await fetch('https://backend-kriguer.herokuapp.com/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
    window.location.href = `zkriguer.github.io/frontend-crud/Login.html`
    alert('Conta criada com sucesso!')
})
