/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.getElementById("btn");
button.addEventListener("click", buttonClick);

function buttonClick() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      drawCards(result);
    })
    .catch((error) => console.error(error));
}

function drawCards(dataArray) {
  document.getElementById("output").innerHTML = "";

  dataArray.forEach((data) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    cardWrapper.style.cssText =
      "padding: 15px; font-size: 1.4em; background-color: rgb(229, 229, 229); border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.329) 0 0 10px;";

    const avatarWrapper = document.createElement("div");

    const avatar = document.createElement("img");
    avatar.classList.add("avatar-wrapper");
    avatar.src = data.avatar_url;
    avatar.style.cssText = "padding-bottom: 10px; width: 250px;";

    avatarWrapper.append(avatar);

    const loginWrapper = document.createElement("div");
    loginWrapper.classList.add("description-wrapper");

    const login = document.createElement("p");
    login.textContent = data.login;

    loginWrapper.append(login);

    cardWrapper.append(avatarWrapper, loginWrapper);

    document.getElementById("output").append(cardWrapper);

    document.getElementById("output").style.cssText =
      "display: flex; flex-wrap: wrap; justify-content: center; text-align: center; gap: 15px;";
  });
}
