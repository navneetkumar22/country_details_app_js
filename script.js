const getDetails = cName => {
  localStorage.setItem("cName", cName);
  location.href = "./country.html";
}

let countryDiv = document.querySelector('.second');
function fCountry() {
  fetch('https://restcountries.com/v2/all')
    .then(data => { return data.json() })
    .then(result => {
      countryDiv.innerHTML = "";
      for (let i = 0; i < result.length; i++) {
        if (result[i].region == "Europe") {
          countryDiv.innerHTML += `
                              <div class="countries" onclick="getDetails('${result[i].name}')">
                                  <div class="country-img">
                                      <img src=${result[i].flag} />
                                  </div>
                                  <div class="country-info">
                                      <h5 class-"countryName">${result[i].name}</h5>
                                      <p><strong>Population:</strong>${result[i].population}</p>
                                      <p class="regionName"><strong>Region:</strong>${result[i].region}</p>
                                      <p><strong>Capital:</strong>${result[i].capital}</p>
                                  </div>
                              </div>
                              `
        }
      }
    })
}

fCountry();