import { navigateTo } from "../../support/page_objects/navigationModule"
import { onSmartTable } from "../../support/page_objects/smartTablePage"

describe('verify smart table', ()=>{
    
    // change to visit
    beforeEach('open HomePage', () => {
        cy.visit('/')
    })

        /*
    Add test: 
    1. click add 
    2. Input all required fields 
    3. click on checkmark
    4. verify the first row contains params that we're added*/

    it('should add new entry with defined params', () => {
        navigateTo.smartTablePage()
        onSmartTable.addEntryWithParams(0, "Anne", "Frank", "anneFrank","email@uk.com", 20)
        onSmartTable.verifyTableRowContainsValues(0, 0, "Anne", "Frank", "anneFrank","email@uk.com", 20)
    })

    /*
    Edit test: 
    1. click edit on first row
    2. change name
    3. verify the name has changed*/

    it('should edit existing entry', () => {
        navigateTo.smartTablePage()
        onSmartTable.editEntryParamsByIndex(0, 0, "AnneEdited", "Frank", "anneFrankEdited","email@uk.com", 21)
        onSmartTable.verifyTableRowContainsValues(0, 0, "AnneEdited", "Frank", "anneFrankEdited","email@uk.com", 21)
    })

    /*Delete test: 
    1. click delete icon in first row
    2. stub() for 'Agree' in pop-up
    3. verify there is no entriy on the page with params*/

    it('should delete the last added entry, confirm', () => {
        navigateTo.smartTablePage()
        onSmartTable.addEntryWithParams(0, "Anne", "Frank", "anneFrank","email@uk.com", 20)
        onSmartTable.deleteEntryByIndex(0, true)
        onSmartTable.verifyTableDoesntContainEntryWithUsername("anneFrank")
    })

    it('shouldn\'t delete the last added entry, cancel', () => {
        navigateTo.smartTablePage()
        onSmartTable.addEntryWithParams(0, "Anne", "Frank", "anneFrank","email@uk.com", 20)
        onSmartTable.deleteEntryByIndex(0, false)
        onSmartTable.verifyTableRowContainsValues(0, 0, "Anne", "Frank", "anneFrank","email@uk.com", 20)
    })

    /*Filter by age: OUT OF CURRENT SCOPE
    1. Input age in filter pane 
    2. verify that only entries with 'age' are present on the page*/

})