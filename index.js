let buttonCounter = document.querySelector('.btn-counter');
let counterText = document.querySelector('.counter');
let buttonReset = document.querySelector('.btn-reset');
let counter = 0;
counterText.innerText = counter;

buttonCounter.addEventListener('click', function () {
    counter += 1;

    counterText.innerText = counter;

} );

buttonReset.addEventListener('click', function () {
    counter = 0;

    counterText.innerText = counter;
})


