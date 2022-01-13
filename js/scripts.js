// dont use element.innertHTML += 'HTML string" but element.insertAdjacentHTML("beforeend", "HTML string")

// send a single request to the API and use the respond data do dispay 12 users; along with some basic information for each
// image, first ans last nale; email; city or location

var searchBar = document.querySelector(".search-container");
console.log(searchBar);
searchBar.insertAdjacentHTML(
  "afterend",
  `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`
);

fetch("https://randomuser.me/api/?page=2&results=12&seed=abc")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    for (var i = 0; i < 13; i++) {
      var d1 = document.getElementById("gallery");
      d1.insertAdjacentHTML(
        "afterend",
        ` <div class="column">
        <div class="card">
      <div class="card-img-container">
          <img class="card-img" src="${data.results[i].picture.medium}" alt="profile picture">
      </div>
      <div class="card-info-container">
      <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
      <p class="card-text"> ${data.results[i].email}</p>
      <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
  </div>
</div> `
      );
    }
  })
  .then(function (results) {
    // This is the JSON from our response
    console.log(results);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
