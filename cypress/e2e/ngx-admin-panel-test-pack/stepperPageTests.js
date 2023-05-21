import { navigateTo } from "../../support/page_objects/navigationModule"
import { onStepperPage } from "../../support/page_objects/stepperPage"

describe('verify stepper modules', () => {

    beforeEach('open HomePage', () => {
        cy.visit('/')
    })

    it('verify top stepper happy path', () => {
        navigateTo.stepperPage()
        // First step
        onStepperPage.elements.stepIndicatorsTopStepper().eq(0).should('have.class', 'selected')
        onStepperPage.elements.prevButtonTopStepper().should('have.attr', 'disabled')
        onStepperPage.elements.stepContentTopStepper().should('have.text', 'Step content #1')
        onStepperPage.elements.nextButtonTopStepper().should('have.attr', {'aria-disabled':'false'})
        onStepperPage.elements.nextButtonTopStepper().click()
        // Second step
        onStepperPage.elements.stepIndicatorsTopStepper().eq(0).should('have.class', 'completed')
        onStepperPage.elements.stepIndicatorsTopStepper().eq(1).should('have.class', 'selected')
        onStepperPage.elements.prevButtonTopStepper().should('not.have.attr', 'disabled')
        onStepperPage.elements.stepContentTopStepper().should('have.text', 'Step content #2')
        onStepperPage.elements.nextButtonTopStepper().should('have.attr', {'aria-disabled':'false'})
        onStepperPage.elements.prevButtonTopStepper().click()
        // Return to step 1
        onStepperPage.elements.stepIndicatorsTopStepper().eq(0).should('have.class', 'selected')
        onStepperPage.elements.stepIndicatorsTopStepper().eq(1).should('have.class', 'completed')
        onStepperPage.elements.prevButtonTopStepper().should('have.attr', 'disabled')
        onStepperPage.elements.stepContentTopStepper().should('have.text', 'Step content #1')
        onStepperPage.elements.nextButtonTopStepper().should('have.attr', {'aria-disabled':'false'})
        // Go to the last step
        onStepperPage.elements.nextButtonTopStepper().click()
        onStepperPage.elements.nextButtonTopStepper().click()
        onStepperPage.elements.nextButtonTopStepper().click()
        onStepperPage.elements.nextButtonTopStepper().should('have.attr', 'disabled')
        onStepperPage.elements.stepContentTopStepper().should('have.text', 'Step content #4')
    })
})