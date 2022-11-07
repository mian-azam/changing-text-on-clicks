'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

//-----------------------------------------------------------------------------------------

const content = select('.content');
const para = select('.para');
const btn = select('.btn');
const footer = select('.footer-nav');


//---------------------adding classes for animation:
function animation() {
    para.classList.add('animation-para');
    btn.classList.add('animation-btn');
    footer.classList.add('animation-footer');
}


window.addEventListener('load', () => {
    animation();
});

//---------------------changing text on clickin button:

const text = ['I am a Pakistani Citizen.',
    'I lives in Winnipeg.',
    'I am a student of Software Development.',
];


let n = 0;

onEvent('click', btn, function () {
    btn.innerText = (n === 2) ? 'Again ?' : 'More';

    if (n == 2) {
        para.innerText = text[n = 0];
        return;
    }
    para.innerText = text[++n];
});