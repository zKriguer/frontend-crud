(async function () {
    const params = (new URL(document.location)).searchParams
    const email = params.get('user')
    const get = await (await fetch(`https://backend-kriguer.herokuapp.com/api/users/${encodeURIComponent(email)}`)).json()

    const name = get.name

    let title = document.querySelector('.titulo')

    title.innerHTML = `Bem vindo ${name}` 

    submitA.addEventListener('click', async () => {
        const verifypassword = get.password
        const name = document.getElementById('nome').value
        const password = document.getElementById('senha').value
        const oldpassword = document.getElementById('senhaantiga').value
    
        const user = { name, password }
        if(oldpassword == '' || verifypassword != oldpassword ) return alert('Insira sua senha antiga (Valida)')
        const patch = await fetch(`https://backend-kriguer.herokuapp.com/api/users/${email}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        alert('Dados Atualizados com Sucesso')
    })

    submitD.addEventListener('click', async () => {
        const verifypassword = get.password
        const actualpassword = document.getElementById('senhaatual').value
        if(actualpassword == '' || actualpassword != verifypassword) return alert('Insira sua senha atual para deletar sua conta')
        const deleted = await fetch(`https://backend-kriguer.herokuapp.com/api/users/${email}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
        })
        window.location.href = `cadastro.html`
        alert('CONTA DELETADA COM SUCESSO')
    })
})()

let submitA = document.getElementById('submit')
let submitD = document.getElementById('submitdel')

let form1 = document.getElementById('1')
let form2 = document.getElementById('2')

form1.addEventListener('submit', (event) =>{
    event.preventDefault()
})
form2.addEventListener('submit', (event) =>{
    event.preventDefault()
})


