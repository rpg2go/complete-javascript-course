// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

const loadNPause = async function () {
    try {
        let image = await createImage('img/img-1.jpg');
        console.log(`image 1 loaded`);
        wait(2);
        //image.style.display = 'none';

        image = await createImage('img/img-2.jpg');
        console.log(`image 2 loaded`);
        wait(2);
        //image.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
};

// loadNPause();

const testData = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs);

        let currentImage;
        const imagesElements = await Promise.all(imgs);

        for (let i = 0; i < imagesElements.length; i++) {
            console.log(imagesElements[i].src);
            currentImage = imagesElements[i];
            currentImage.classList.add('parallel');
        }
    } catch (err) {
        console.error(err);
    }
};

loadAll(testData);

// createImage('img/img-1.jpg')
//     .then(img => {
//         console.log('image 1 loaded');
//         currentImg = img;
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.log(err));
