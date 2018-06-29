describe('tests user experience of site', () => {
  it('Checks that the page displays items correctly when navigating through links', () => {
    cy.visit('/')
    cy.get('title').should('contain', 'Magic Memory: A flash card memorization application for leanring Magic: the Gathering Cards!')
    cy.get('ul li a').contains('Game').click
    cy.visit('/game')
    cy.url().should('contain', '/game')
  })
})