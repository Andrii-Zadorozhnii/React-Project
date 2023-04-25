import './CharactersApi.scss';
// const privateKey = 'a2df58f53b152c29ef206b3d34f46da3aef4877c';
const publicKey = 'e5c9b327f2a726f544ee7694ac581b27';
const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}`;

function CharactersApi(){
    let apiResult = {};

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => apiResult = data)
        .catch(error => console.log(error));
    console.log(apiResult)

    return null; // or any other content that you want to render
}

export default CharactersApi;
