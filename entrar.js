let submit = document.getElementById('submit')

let form = document.forms[0]
form.addEventListener('submit', (event) =>{
    event.preventDefault()
})

submit.addEventListener('click', async () =>{
    const regxEmail = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?$/i
    const regxPassword = /^.+/i
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if(!regxEmail.test(email)) alert('Email indecente')
    if(!regxPassword.test(password)) alert('Senha invalida')

    const user = { email, password }

    const get = await (await fetch(`https://backend-kriguer.herokuapp.com/api/users/${encodeURIComponent(email)}`)).json()
    
    if(password !== get.password) {alert('Senha Incorreta')}
    else{ window.location.href = `zkriguer.github.io/frontend-crud/index.html?user=${email}`}

})
