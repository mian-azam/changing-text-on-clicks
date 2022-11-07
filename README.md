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
```
```JavaScript


function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}
```



