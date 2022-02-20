'use strict';

console.log('Getting position');

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// getPosition().then(pos => console.log(pos));

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const whereAmI = function () {
    getPosition()
        .then(pos => {
            console.log(pos.coords);
            const { latitude: lat, longitude: long } = pos.coords;

            return fetch(`https://geocode.xyz/${lat},${long}?json=1`);
        })
        .then(response => {
            console.log(response);
            if (!response.ok)
                throw new Error(
                    `Something went wrong. Api failed with : ${response.status} status`
                );
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);
            getCountryData(data.country);
        })
        .catch(error => {
            console.log(error);
            renderError(`There is an error ${error}`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
            console.log('Promise executed');
        });
};

btn.addEventListener('click', whereAmI());
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
};

function getObjectValue(obj) {
    let code, name;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            code = key;
            name = obj[key];

            if (typeof name === 'object') {
                const newObj = name;
                for (var innerKey in newObj) {
                    name = newObj[innerKey];
                    break;
                }
            }
        }
    }
    //   console.log(code, name);
    return { code, name };
}

const renderCountry = function (data, className = '') {
    const language = getObjectValue(data.languages);
    const currency = getObjectValue(data.currencies);
    const html = `
              <article class="country" ${className}>
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                  <h3 class="country__name">${data.name.common}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                  ).toFixed(1)} mil people</p>
                  <p class="country__row"><span>🗣️</span>${language.name}</p>
                  <p class="country__row"><span>💰</span>${currency.name}</p>
                  <p class="country__row"><span>⌚</span>${data.timezones}</p>
              </div>
              </article>
              `;

    // console.log(html);
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
};

const getJson = function (url, errorMessage = 'Something went wrong...') {
    return fetch(url).then(response => {
        console.log(response);
        if (!response.ok)
            throw new Error(`${errorMessage} (${response.status})`);
        return response.json();
    });
};

const getCountryData = function (country) {
    //country 1
    getJson(
        `https://restcountries.com/v3.1/name/${country}`,
        'Error retrieving country data by name'
    )
        .then(data => {
            renderCountry(data[0]);
        })
        .catch(err => {
            console.error(`There is an error${err}`);
            renderError(`There is an error ${err.message}`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};
