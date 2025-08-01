describe('Orange HRM Tests', () => {
  it.skip('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login - Failure', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('InvalidUser')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('InvalidPass')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
  })
})