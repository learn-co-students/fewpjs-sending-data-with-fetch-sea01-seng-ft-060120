// Add your code here

function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            document.body.innerHTML = object['id']
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        });
} 