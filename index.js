// const { bodyParser } = require("json-server")

// Add your code here
const body = document.querySelector('body')

function submitData(userName, eMail) {
   return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                   Accept: 'application/json'},
        body: JSON.stringify({name: userName, email: eMail})           
        })
        .then(resp => resp.json())
        .then(data => handleData(data) )
        .catch(error => handleError(error))
}


submitData('vyvelife','felicola@gmail.com')



console.log('hello')

function handleData(data) {
    const h1 = document.createElement('h1')
    h1.textContent = data.id
    body.appendChild(h1)
}

function handleError(error){
    const h2 = document.createElement('h2')
    h2.textContent = error.message
    body.append(h2)
    alert('Error processing request')
    console.log(error.message)
}