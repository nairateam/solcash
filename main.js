// const head = $('.hero-title');

// head.text(' Decentralized P2P Payment System Powered By Solana');

ScrollReveal({ 
    reset: true,
    distance: '30px',
    duration: 2500,
    delay: 40
});

const slideDown = {
    reset: true,
    // duration: 2500,
    distance: '5%',
    origin: 'top',
    opacity: null
};

const slideLeft = {
    distance: '35%',
    duration: 2500,
    delay: 0,
    origin: 'left',
    opacity: null
};

const slideRight = {
    distance: '35%',
    duration: 2500,
    delay: 0,
    origin: 'right',
    opacity: null
};

const slideUp = {
    distance: '15%',
    duration: 1000,
    delay: 0,
    origin: 'bottom',
    opacity: null
};

const upRev = [
    document.querySelector('.lite-paper'),
    document.querySelector('#box-1'),
    document.querySelector('#box-2'),
    document.querySelector('#box-3'),
    document.querySelector('.card-1'),
    document.querySelector('.card-2'),
    document.querySelector('.card-3'),
    document.querySelector('.card-4')

];

const leftRev = [
    document.querySelector('.left-row'),
    document.querySelector('.leftrev2'),
    document.querySelector('.leftrev3'),
    // document.querySelector('#box-3'),
];

const rightRev = [
    document.querySelector('.right-row'),
    document.querySelector('.rightrev2'),
    document.querySelector('.rightrev3'),
    // document.querySelector('#box-3'),
];

ScrollReveal().reveal('.hero-banner', slideDown);
ScrollReveal().reveal('.card-5', slideDown);
ScrollReveal().reveal(upRev, slideUp);
ScrollReveal().reveal(leftRev, slideLeft);
ScrollReveal().reveal(rightRev, slideRight);