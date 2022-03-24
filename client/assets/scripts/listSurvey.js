let myHeaders = new Headers();
let url = '/content';
let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let containerContent = document.querySelector('#allContent');

// l'affichage de base
fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((response) => {

      response.forEach(elt => {
        let theEntry = document.createElement('div');
        let theCard = document.createElement('div');
        let theName = document.createElement('h3');
        let theP = document.createElement('span');
        theP.innerHTML = `<strong>City :</strong> ${elt.city} <strong><br>Favourite food :</strong> ${elt.favouriteFood}<br>`;
        let theLink = document.createElement('a');
        theLink.href = './survey.html#' + elt.id;
        theLink.innerText = 'Details';
        if (elt.contactInformation) {
          theEntry.style.backgroundColor = elt.colour;
        } else {
          theEntry.style.backgroundColor = 'white';
        }

        theName.innerText = elt.name;

        theEntry.classList.add('col', 's12', 'm6', 'l6', 'singleCard');
        theCard.classList.add('card');
        theName.classList.add('cart-title');
        theP.classList.add('card-content', 'flow-text');
        theLink.classList.add('card-action');

        containerContent.appendChild(theEntry);
        theEntry.appendChild(theCard);
        theEntry.appendChild(theName);
        theEntry.appendChild(theP);
        theEntry.appendChild(theLink);
      });
    });