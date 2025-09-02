fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(responseJSON => {
    const breeds = Object.keys(responseJSON.message);
    const top10 = breeds.sort().slice(0, 10);

    console.log(top10)})
.catch(e => console.error(e))