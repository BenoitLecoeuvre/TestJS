import {getUsers} from "./api_service.js";

const UserDiv = document.getElementById('users');

getUsers().then(users => {
    let html = users.map(u => {
        let date = new Date(u.birthday);
        return /*html*/ `
        <div class="user">
            <figure>
                <img src="${u.image}" />
            </figure>
                <h2 class="name">${u.firstname} ${u.lastname}</h2>
            <div class="info">
                <p class="email">Mon mail est ${u.email}</p>
                <p class="birthday">Je suis né le ${date}</p>
                <p class="adress">J'habite à ${u.adress}</p>
                <p class="tel">Mon numéro est le ${u.tel}</p>
                <p class="password">Mon mot de passe est ${u.password}</p>
            </div>
        </div> `

    }); 
    document.getElementById('users').innerHTML = html.join("");
});
