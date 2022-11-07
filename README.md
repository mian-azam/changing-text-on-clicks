## Changing Text on Clicks
We often see in websites that a specific change occurs when we click a button. That is all done by using JavaScript. In this project, I will show you how we can change 'Text' whenever we click a button that is actually a base for what I said in the first line.

Click [here](https://mian-azam.github.io/changing-text-on-clicks/) to see the actual project 'Changing text on click'.

###

## Explantion of how I did it:
First of all I created HTML file and CSS file, its tottaly up to you, how you want to structure your page and style it. But for this tutorial, two elemnets of HTML are necessary: ``` <p></p> ``` in which we have put the text that will be chnaged when we will click ```<button></Button>```. 
Creat a paragrapgh and a button and style it however you like. The core of this tutorial is to change the text of inside ```<p></p>``` and also innertext of ```<buuton></button>```, on clicking that button.

## Let's dive into the action 
So after creating your page structure with ```HTML``` and styling it with ``` CSS```, we will work on the actual outcome of this project i.e 'Changing text on click', and we will do it by ```JavaScript```. 
First of all, I created utility functions that will be usefull for calling elemnts from HTML to JS. 
```JavaScript


function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}
```
We have assigned classes to our paragraph and button and will use those classes to call them in our JS.

What I am gonna do here is, I will change the text of my paragraph for three times by clicking the button. (deifferent on each click)
As well as on every click, text of my button will also be changed. So let's do it.

We will creat an array in which we will add all the text that we want to change and each index will represent each line that will appear on each click. 
```JavaScript
const text = ['I am a Pakistani Citizen.',
    'I lives in Winnipeg.',
    'I am a student of Software Development.',
];
```
After this, we will create an ```onEvent``` function that will do our actual action. This function will be triggered whenever we will click our button. Inside this function, i have used ternary function to change the text of our button and an if statemnt to change the text of our paragraph. Function will count the clicks of our button and will change the texts accordingly. The ```onEvent``` function is as follow:
```JavaScript
let n = 0;

onEvent('click', btn, function () {
    btn.innerText = (n === 2) ? 'Again ?' : 'More';

    if (n == 2) {
        para.innerText = text[n = 0];
        return;
    }
    para.innerText = text[++n];
});
```
So, by using these techniques and functions, we can change the text and by taking this example in mind, we can change other stuff too. 
The complete JS code is as follow:

```JavaScript
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
```

## References to learn more:
[W3Schoold](https://www.w3schools.com/)

[Mozilla Developer Tools](https://developer.mozilla.org/en-US/)

[Stack OverFlow](https://stackoverflow.com/)


