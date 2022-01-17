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
  const response = await fetch("https://randomuser.me/api/?results=12");
  const jsonData = await response.json();
  console.log(jsonData);
  const user = jsonData.results.map((user) => {
    return user;
  });

  modal(user);
};

const displayOnPage = (user) => {
  var gallery = document.getElementById("gallery");
  for (let i = 0; i < user.length; i++) {
    gallery.insertAdjacentHTML(
      "afterend",
      ` <div class="column">
              <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${
                  user[i].picture.large
                }" alt="profile picture">
            </div>
            <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user[i].name.first} ${
        user[i].name.last
      }</h3>
            <p class="card-text"> ${user[i].email}</p>
            <p class="card-text cap">${user[i].location.city}, ${
        user[i].location.state
      }</p>
        </div>
        </div> 
        <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${
                          user[i].picture.large
                        }" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${
                          user[i].name.first
                        } ${user[i].name.last}</h3>
                        <p class="modal-text">${user[i].email}</p>
                        <p class="modal-text cap">${user[i].location.city}, ${
        user[i].location.state
      } </p>
                        <hr>
                        <p class="modal-text">${user[i].phone}</p>
                        <p class="modal-text"> ${
                          user[i].location.street.number
                        } ${user[i].location.street.name},  ${
        user[i].location.country
      } - ${user[i].location.postcode}   </p>
                        <p class="modal-text">DOB: ${
                          user[i].dob.date.split("T")[0]
                        }</p>
                    </div>
                    <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
                </div>`
    );
  }
};

const modal = (user) => {
  displayOnPage(user);
  const modals = document.querySelectorAll(".modal-container");
  modals.forEach(function (modals) {
    modals.style.display = "none";
  });

  function closeModal(event) {
    const modalsButton = document.querySelectorAll(".modal-close-btn");
    modalsButton.forEach(function (modalsButton) {
      modalsButton.addEventListener("click", function (event) {
        modals.forEach(function (modals) {
          modals.style.display = "none";
        });
      });
    });
  }

  const cardClasses = document.querySelectorAll(".card");
  cardClasses.forEach(function (cardClasses) {
    cardClasses.addEventListener("click", function (event) {
      var cardClassSibling = cardClasses.nextSibling;
      var modalContainer = cardClassSibling.nextElementSibling;
      console.log(modalContainer);
      modalContainer.style.display = "block";

      closeModal(event);
      event.preventDefault();
    });
  });
};

getData();
