fetch('https://meowfacts.herokuapp.com/')
.then(response => response.json())
.then(responseJSON => console.log(responseJSON))
.catch(e => console.error(e))