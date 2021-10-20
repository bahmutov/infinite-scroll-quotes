/// <reference types="cypress" />

it('shows loading element on scroll', () => {
  cy.visit('/')
  cy.get('.loader').should('be.visible')
  cy.get('.loader').should('not.be.visible')

  cy.window().scrollTo('bottom')
  cy.get('.loader').should('be.visible')
  cy.get('.loader').should('not.be.visible')

  cy.window().scrollTo('bottom')
  cy.get('.loader').should('be.visible')
  cy.get('.loader').should('not.be.visible')
})

it('fetches N items at a time', () => {
  cy.visit('/')
  cy.get('.quote').should('have.length.greaterThan', 5)
  .then(quotes => {
    cy.window().scrollTo('bottom')
    cy.get('.quote').should('have.length', quotes.length * 2)

    cy.window().scrollTo('bottom')
    cy.get('.quote').should('have.length', quotes.length * 3)

    cy.window().scrollTo('bottom')
    cy.get('.quote').should('have.length', quotes.length * 4)
  })
})

it('fetches quotes from API', () => {
  cy.intercept('GET', '**/v1/quotes/*').as('quotes')
  cy.visit('/')
  cy.wait('@quotes')
  cy.get('.quote').should('have.length', 10)

  cy.window().scrollTo('bottom')
  cy.wait('@quotes')
  cy.get('.quote').should('have.length', 20)

  cy.window().scrollTo('bottom')
  cy.wait('@quotes')
  cy.get('.quote').should('have.length', 30)

  cy.window().scrollTo('bottom')
  cy.wait('@quotes')
  cy.get('.quote').should('have.length', 40)
})

it('goes back to the top', () => {
  cy.visit('/')
  cy.window().its('scrollY').should('equal', 0)
  cy.window().scrollTo('bottom')
  cy.get('.quote').should('have.length', 20)
  cy.window().its('scrollY').should('be.greaterThan', 100)

  cy.window().scrollTo('bottom')
  cy.get('.quote').should('have.length', 30)
  cy.window().its('scrollY').should('be.greaterThan', 500)

  cy.get('#back-to-top').click()
  cy.window().its('scrollY').should('equal', 0)
})
