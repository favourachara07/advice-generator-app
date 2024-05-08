# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Screenshot%20(1).png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [GitHub Live Site](https://favourachara07.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript


### What I learned

I learnt how to work with API, GET request from API and access data from it

```js
fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        // Handle the JSON response
        processData(data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
```


### Continued development

I want to improve my knowledge and use of advanced JS techniques in more technical projects so that I can become a better developer

### Useful resources

- [W3Schools](https://www.w3schools.com/js/js_api_fetch.asp) - This helped me to understand and implement fetch/get request for an API

## Author

- Website - [Favour Achara](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/favourachara07)
- Twitter - [@favour2207](https://www.twitter.com/favour2207)

