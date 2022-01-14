// dont use element.innertHTML += 'HTML string" but element.insertAdjacentHTML("beforeend", "HTML string")

// send a single request to the API and use the respond data do dispay 12 users; along with some basic information for each
// image, first ans last nale; email; city or location

var searchBar = document.querySelector(".search-container");
searchBar.insertAdjacentHTML(
  "afterend",
  `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`
);

const getData = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?page=2&results=12&seed=abc"
  );
  const jsonData = await response.json();
  console.log(jsonData);
  const user = jsonData.results.map((user) => {
    return user;
  });

  modal(user);
};

const displayOnPage = (user) => {
  var d1 = document.getElementById("gallery");
  user.forEach((item) =>
    d1.insertAdjacentHTML(
      "afterend",
      ` <div class="column">
              <div class="card">
            <div class="card-img-container" id="hi">
                <img class="card-img" src="${item.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
            <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
            <p class="card-text"> ${item.email}</p>
            <p class="card-text cap">${item.city}, ${item.location.state}</p>
        </div>
        </div> `
    )
  );
};

const modal = (user) => {
  displayOnPage(user);

  function myFunction() {
    alert("I am an alert box!");
  }
  const ids = document.querySelectorAll("#hi");
  document.querySelectorAll("#hi").forEach(function (ids) {
    ids.addEventListener("click", myFunction);
  });
};

getData();
