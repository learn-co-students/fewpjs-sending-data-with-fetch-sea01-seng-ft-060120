const submitData = (user_name, user_email) => {

    let body = document.querySelector('body')

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({name: user_name, email: user_email})
    })
    .then(res => res.json())
    .then(json => {
        let div = document.createElement('div')
        div.innerHTML = json.id
        body.appendChild(div)    
    })
    .catch(error => {
        let div = document.createElement('div')
        div.innerHTML = error.message
        body.appendChild(div)
    })

}
submitData('user_name', 'user_email')