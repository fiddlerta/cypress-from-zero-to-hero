export class StepperPage{

    elements={
        stepIndicatorsTopStepper: () => cy.get("nb-stepper[data-testid='top_stepper'] div.step"),
        stepContentTopStepper: () => cy.get("nb-stepper[data-testid='top_stepper'] h3"),
        prevButtonTopStepper: () => cy.get("nb-stepper[data-testid='top_stepper']").contains("prev"),
        nextButtonTopStepper: () => cy.get("nb-stepper[data-testid='top_stepper']").contains("next")
    }

    clickOnNextButtonTopStepepr(){
        this.elements.nextButtonTopStepper().click()
    }

    clickOnPrevButtonTopStepepr(){
        this.elements.prevButtonTopStepper().click()
    }
}

export const onStepperPage = new StepperPage()