'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

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

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://restcountries.com/v3.1/name/' + country);
//     request.send();
//     console.log(request.responseText);

//     request.addEventListener('load', function () {
//         //   const data = JSON.parse(this.response);
//         const [data] = JSON.parse(this.responseText);
//         // console.log(data);

//         const language = getObjectValue(data.languages);
//         const currency = getObjectValue(data.currencies);

//         const html = `
//             <article class="country">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                     +data.population / 1000000
//                 ).toFixed(1)} mil people</p>
//                 <p class="country__row"><span>🗣️</span>${language.name}</p>
//                 <p class="country__row"><span>💰</span>${currency.name}</p>
//                 <p class="country__row"><span>⌚</span>${data.timezones}</p>
//             </div>
//             </article>
//             `;

//         // console.log(html);
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// };

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

// const getCountryAndNeighbour = function (country) {
//     //ajax call country 1

//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://restcountries.com/v3.1/name/' + country);
//     request.send();
//     console.log(request.responseText);

//     request.addEventListener('load', function () {
//         // const data = JSON.parse(this.response);
//         const [data] = JSON.parse(this.responseText);

//         //render country 1
//         renderCountry(data);

//         const [neighbour] = data.borders;
//         // console.log(neighbour);

//         if (!neighbour) return;

//         //ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open(
//             'GET',
//             `https://restcountries.com/v3.1/name/${neighbour}`
//         );
//         request2.send();
//         // console.log(request.responseText);

//         request2.addEventListener('load', function () {
//             // console.log(this.responseText);
//             const [data2] = JSON.parse(this.responseText);
//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// getCountryAndNeighbour('portugal');

// getCountryData('romania');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('france');

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// setTimeout(() => {
//     console.log('5 second passed');
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/' + country);
// request.send();
// console.log(request.responseText);

const request = fetch('https://restcountries.com/v3.1/name/portugal/');
console.log(request);

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data[0]);
//             renderCountry(data[0]);
//         });
// };

const getJson = function (url, errorMessage = 'There is an error') {
    return fetch(url).then(response => {
        console.log(response);
        if (!response.ok)
            throw new Error(`${errorMessage} ${response.statusText}`);
        return response.json();
    });
};

const getCountryData = function (country) {
    //country 1
    getJson(
        `https://restcountries.com/v3.1/name/${country}`,
        'Error retrieving country data'
    )
        .then(data => {
            renderCountry(data[0]);

            const neighbour = data[0].borders[0];
            // console.log(neighbour);
            if (!neighbour) throw new Error('Cannot retrieve neigbbour info.');

            //country 2
            return getJson(
                `https://restcountries.com/v3.1/name/${neighbour}`,
                'Error retrieving country data'
            );
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`There is an error${err}`);
            renderError(`There is an error ${err.message}`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function () {
    console.log('button was clicked.');
    getCountryData('portugal');
});
