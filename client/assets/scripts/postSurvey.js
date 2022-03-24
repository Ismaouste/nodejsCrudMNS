let url = '/survey';


// l'ajout
document.querySelector('#participate').addEventListener('click', (e) => {
  e.preventDefault();
  let tmp = {
    id:32,
		name:document.querySelector('#name'),
		city: document.querySelector('#city'),
		favouriteFood:"seafood",
		contactInformation:true
  };

  let options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(tmp)
  }

  fetch(url, options)
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((response) => {
      console.log(response)
    })
});
