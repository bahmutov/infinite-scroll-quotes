# infinite-scroll-quotes [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-9.5.2-brightgreen) ![cypress-recurse version](https://img.shields.io/badge/cypress--recurse-1.18.0-brightgreen) [![ci](https://github.com/bahmutov/infinite-scroll-quotes/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/bahmutov/infinite-scroll-quotes/actions/workflows/ci.yml)
> Example testing the infinite scroll using Cypress

## Infinite scroll tests

Watch the video [Testing The Infinite Scroll With Cypress](https://youtu.be/918BqmTa-w4)

Infinite scroll tests are in [cypress/integration/spec.js](./cypress/integration/spec.js).

## Find the text

The spec [cypress/integration/find-text.js](./cypress/integration/find-text.js) shows how to keep scrolling the page until we find a quote with the word "debug" in it. Watch the video [Use cypress-recurse To Scroll The Page Until It Loads The Text We Are Looking For](https://youtu.be/KHn7647xOz8).

## Install and run

```
$ npm install
$ npm run dev
```

Start the application and opens Cypress. Click on the spec `spec.js` to run all tests

The example page copied from [JavaScript Infinite Scroll](https://www.javascripttutorial.net/javascript-dom/javascript-infinite-scroll/)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
