const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

searchInstagram(search);

async function searchInstagram(search) {
  const resp = await fetch(
    `https://www.instagram.com/web/search/topsearch/?&query=${search}`
  );
  const respData = await resp.json();

  console.log(respData);
  ınstaUser(respData);
}

function ınstaUser(data) {
  main.innerHTML = "";

  for (let i in data.users) {
    let userData = data.users[i].user;

    const user = document.createElement("div");
    user.classList.add("user");

    user.innerHTML = `
        <div class="user">
                <div class="image-holder">
                    <img src="${userData.profile_pic_url}" />
                </div>
                <div class="user-account-info">
                    <div class="user-display-name">${userData.full_name}</div>
                  <a href= "https://instagram.com/${userData.username}"><div class="user-name">@${userData.username}</div></a> 
                </div>
            </div>`;

    main.appendChild(user);
  }
}

form.addEventListener("submit", (e) => {
  const username = search.value;

  if (username) {
    searchInstagram(username);
  }

  e.preventDefault();
});
