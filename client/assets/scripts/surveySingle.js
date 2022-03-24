// Je récupère le #id
// window.location.hash => va me donner #id
// split ça va me permettre de diviser ma chaine de caractère
// en sous élément qui sont séparé par le caractère en paramètre
let theId = window.location.hash.split('#')[1];

let myHeaders = new Headers();
let url = '/survey/' + theId;
let options = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

fetch(url, options)
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((response) => {
        console.log(response)
            //Display element information in the page
        document.querySelector("#theName").innerHTML = response.name;
        document.querySelector("#theCity").innerHTML = response.city;
        document.querySelector("#theFood").innerHTML = response.favouriteFood;
        document.querySelector("#theCard").style.backgroundColor = response.colour;
});



document.querySelector('#myDel').addEventListener('click', (e) => {
    let delHeaders = new Headers();

    let delUrl = '/del' ;
    let delOptions = {
    method: 'POST',
    body:JSON.stringify(theId),
    headers: delHeaders,
    mode: 'cors',
    cache: 'default'
    };
    
    fetch(delUrl, delOptions);

});
