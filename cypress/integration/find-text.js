/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'

// watch the explanation video at
// https://youtu.be/KHn7647xOz8
it('scrolls to load more quotes until it finds the word "debug"', () => {
  cy.visit('/')

  recurse(
    // we are using an empty assertion callback
    // to avoid tripping the built-in cy.contains assertion
    // should("exist") since we do not know if there is
    // an element on the first page. Instead we let
    // the predicate function check the result
    () => cy.contains('.quote', 'debug').should(() => {}),
    ($quote) => $quote.length > 0,
    {
      limit: 10,
      delay: 1000,
      timeout: 10000,
      log: false,
      post() {
        // if we do not find the quote with the word "debug"
        // scroll to the bottom of the page
        // and wait for more quotes to load
        cy.get('.quote').then(($quotes) => {
          cy.scrollTo('bottom')
          cy.get('.quote').should('have.length.greaterThan', $quotes.length)
        })
      },
    },
  )
    // make the found element stand out
    .scrollIntoView()
    .invoke('css', 'border', '2px solid red')
})
