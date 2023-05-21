import { navigateTo } from "../../support/page_objects/navigationModule"

describe('verify navigation from HomePage', () => {

    beforeEach('Login and open HomePage', () => {
        cy.loginToApplication()
    })

    it('should navigate to Stepper page', () => {
        navigateTo.stepperPage()
        cy.url().should('include', '/layout/stepper')
    })

    it('should navigate to Form Layouts page', () => {
        navigateTo.formLayoutsPage()
        cy.url().should('include', '/forms/layouts')
    })

    // todo: add tests for other pages
})