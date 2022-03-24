let url = '/participate';


// Récupérer le formulaire de la page /participate.html lors d'un clic sur le bouton "Post"
document.querySelector('#participate').addEventListener('click', (e) => {
  // Prévenir le rechargement automatique de la page après l'envoi du formulaire
  e.preventDefault();
    // Correspondance des champs du formulaire aux propriétés d'un élément de notre JSON data
    let tmp = {
        id:32,
        name:document.querySelector('#name'),
        city:document.querySelector('#city'),
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
