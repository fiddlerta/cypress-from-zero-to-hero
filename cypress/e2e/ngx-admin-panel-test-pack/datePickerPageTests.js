import { onDatePickerPage } from "../../support/page_objects/datepickerPage"
import { navigateTo } from "../../support/page_objects/navigationModule"

describe('verify common datepicker on date picker page', () =>{

    beforeEach('open HomePage', () => {
        cy.visit('/')
    })

    it('should select date in Common Datepicker', () => {
        navigateTo.datePickerPage()
        onDatePickerPage.selectDateFromCurrentInCommonDatepicker(7)
        onDatePickerPage.elements.inputCommonDatepicker().should('include.value', onDatePickerPage.returnFutureDate(7))
    })
})