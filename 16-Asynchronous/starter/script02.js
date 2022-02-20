'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function (country) {
    try {
        const pos = await getPosition();

        // console.log(pos.coords);
        const { latitude: lat, longitude: long } = pos.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${long}?json=1`);
        if (!resGeo.ok) throw new Error('Problem getting location data');

        const dataGeo = await resGeo.json();
        // console.log(dataGeo);

        const res = await fetch(
            `https://restcountries.com/v3.1/name/${dataGeo.country}`
        );
        if (!res.ok) throw new Error('Problem getting country data');

        // console.log(res);

        const data = await res.json();
        // console.log(data[0]);
        renderCountry(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        //console.log(err);
        renderError(`${err.message}`);
        throw new Error(`${err.message}`);
    }
};

console.log('1: Will get location');

// const city = whereAmI();
// console.log(city);

// whereAmI()
//     .then(city => console.log(`2 : ${city}`))
//     .catch(err => console.error(err.message))
//     .finally(() => console.log('3: Finish getting location'));

// (async function () {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`);
//     } catch (err) {
//         console.err(`${err.message}`);
//     } finally {
//         console.log('3: Finish getting location');
//     }
// })();

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
    countriesContainer.style.opacity = 1;
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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJson = function (url, errorMessage = 'Something went wrong...') {
    return fetch(url).then(response => {
        // console.log(response);
        if (!response.ok)
            throw new Error(`${errorMessage} (${response.status})`);
        return response.json();
    });
};

const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJson(
        //     `https://restcountries.com/v3.1/name/${c1}`
        // );
        // const [data2] = await getJson(
        //     `https://restcountries.com/v3.1/name/${c2}`
        // );
        // const [data3] = await getJson(
        //     `https://restcountries.com/v3.1/name/${c3}`
        // );

        // console.log([data1.capital, data2.capital, data3.capital]);

        const data = await Promise.all([
            getJson(`https://restcountries.com/v3.1/name/${c1}`),
            getJson(`https://restcountries.com/v3.1/name/${c2}`),
            getJson(`https://restcountries.com/v3.1/name/${c3}`),
        ]);

        console.log(data.map(d => d[0].capital));
    } catch (err) {
        console.error(err);
    }
};

// get3Countries('portugal', 'france', 'greece');

//promise.race

// (async function () {
//     const res = await Promise.race([
//         getJson(`https://restcountries.com/v3.1/name/italy`),
//         getJson(`https://restcountries.com/v3.1/name/romania`),
//         getJson(`https://restcountries.com/v3.1/name/france`),
//     ]);

//     console.log(res[0]);
// })();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long'));
        }, sec * 1000);
    });
};

// Promise.race([
//     getJson(`https://restcountries.com/v3.1/name/tanzania`),
//     timeout(0.25),
// ])
//     .then(res => console.log(res[0]))
//     .catch(err => console.error(err));

//Promises.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('successss'),
]).then(res => console.log(res));

//Promises.all
Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('successss'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));

//Promise.any
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('successss'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));
